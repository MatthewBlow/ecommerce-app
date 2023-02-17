import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 13px;
    height: 50vh;
    padding: 20px;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 1580px) {
    height: 80%;
  }

  @media (max-width: 1325px) {
    height: 70%;
  }

  @media (max-width: 1190px) {
    height: 60%;
  } 
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`
const Title = styled.h1`
    color: whitesmoke;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem