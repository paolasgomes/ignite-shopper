import { ReactNode } from "react";
import { Container } from "./styles";
import logoImage from "../../assets/logo.svg";
import Image from "next/image";
import { Header } from "./styles";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;
  return (
    <Container>
      <Header>
        <Image src={logoImage} alt="" priority />
      </Header>
      {children}
    </Container>
  );
}

//aqui o container representaria um body
