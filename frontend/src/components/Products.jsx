import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
 //   display: flex;
 //   flex-wrap: wrap;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 10px;
`;

const Wrapper = styled.div`
  background-color: #191919;
`

const ProductTitle =  styled.h1`
    padding: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

const Products = ({cat, sort}) => {
  const [products, setProducts] = useState([])
  const location = useLocation()
  const title = location.pathname.split("/")[2]?.toUpperCase()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat 
          ?  process.env.REACT_APP_API_URL + `/products?category=${cat}` 
          :  process.env.REACT_APP_API_URL + "/products");
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  },[cat])

  useEffect(() => {
    if((sort === "newest")){
      setProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    } else if((sort === "asc")){
      setProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      );
    } else if((sort === "desc")){
      setProducts((prev) => 
        [...prev].sort((a,b) => b.price - a.price)
      );
    }
  }, [sort])

  return (
    <Wrapper>
    <ProductTitle>{title ? title : "Our Products"}</ProductTitle>
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </Wrapper>
  );
};

export default Products;