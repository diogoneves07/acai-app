import React from "react";

import type { ReactNode } from "react";

import Header from "./Header";
import styled from "@emotion/styled";

export const siteTitle = "Next.js Sample Website";

const Container = styled.div`
  padding-bottom: 2vh;
  width: 100%;
  background-color: #1c1b22;
  background-attachment: fixed;
  min-height: 100vh;
`;

const ContainerGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  margin-top: 30px;
  background-color: #131313;
  background-attachment: fixed;
  padding: 2%;
`;

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div>
      <Container>
        <Header />
        <ContainerGrid>
          <main>{children}</main>
        </ContainerGrid>
      </Container>
    </div>
  );
}
