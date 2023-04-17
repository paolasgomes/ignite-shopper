import { DefaultLayout } from "@/layout/default";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Product = () => {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aliquid rerum
          exercitationem facere a molestiae ut sed velit non mollitia? Officiis hic velit
          assumenda aspernatur nihil, sint sed laboriosam tempora?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
};

Product.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Product;
