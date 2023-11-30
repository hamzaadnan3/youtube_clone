import React from "react";
import Cards from "../components/Cards";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`


const Home = () => {
  return (
    <Container>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Container>
  );
};

export default Home;
