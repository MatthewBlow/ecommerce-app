import styled from "styled-components";
import Products from "../components/Products";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [sort, setSort] = useState("newest")

  return (
    <Container>
      <Navbar/>
      <Title></Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (Low-High)</Option>
            <Option value="desc">Price (High-Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} sort={sort}/>
      <Footer/>
    </Container>
  );
};

export default ProductList;