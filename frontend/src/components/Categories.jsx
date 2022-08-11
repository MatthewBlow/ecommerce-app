import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    height: 630px;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 30px;
    margin: -8px;
    justify-content: space-evenly;
    background-color: #191919;
`
const CategoriesTitle =  styled.h1`
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #191919;
    color: white;
`

const Categories = () => {
  return (
    <div>
    <CategoriesTitle>Most Popular Categories</CategoriesTitle>
    <Container>
    
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
    </div>
  )
}

export default Categories