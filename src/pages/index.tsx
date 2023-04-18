import { DefaultLayout } from "@/layout/default";
import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { Carousel, Content, Product } from "../styles/pages/styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

const HomePage: NextPageWithLayout<HomeProps> = ({ products }) => {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 48,
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <Head>
        <title>Home: Ignite Shopper</title>
      </Head>
      <Content>
        <Carousel ref={sliderRef} className="keen-slider">
          {products.map((product) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
                <Product key={product.id} className="keen-slider__slide">
                  <Image src={product.imageUrl} alt="" width={480} height={480} priority />
                  <footer>
                    <p>{product.name} </p>
                    <span>{product.price}</span>
                  </footer>
                </Product>
              </Link>
            );
          })}
        </Carousel>
      </Content>
    </>
  );
};
HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default HomePage;

//content representa um main

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount || 0) / 100),
    };
  }); // se price... for null, false ou undefined, vai retornar 0

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // a cada duas horas a página vai carregar novamente
  };
};

// Serve para cachear a aplicação no ambiente de produção, porém no ambiente de desenvolvimento tem comportamento igual a getserverprops
//páginas staticas serão iguais para todos os usuários, por exemplo em um ecommerce, agora em páginas de usuários, as páginas devem ser dinâmicas
