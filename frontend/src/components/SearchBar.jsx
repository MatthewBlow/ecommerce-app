import styled from "styled-components"
import { mobile } from "../responsive";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { userRequest } from "../requestMethod";
import SearchResults from "./SearchResults";

const SearchContainer = styled.div`
  background-color: white;
  border: 0.5px solid white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  background: white;
  outline: none;
  border: none;
  width: 400px;
  ${mobile({ width: "50px" })}
`;

const Button = styled.button`
  border: none;
  background: white;
`

const SearchBar = () => {
  const [value, setValue] = useState("")
  const [searchData, setSearchData] = useState([])
  
  const changeHandler = (e) => {
    const makeRequest = async() => {
      try {
        const res = await userRequest.get("/products")
        const filteredData = res.data?.map(data => data.title).filter(search => search.includes(e.target.value))
        setSearchData(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.log(error)
      }
    }
    makeRequest();
  }

  const onSearch = (searchItem) =>{
    console.log(searchItem)
  }

  return(
    <div>
    <SearchContainer>
        <Input type="text" value={value} onChange={changeHandler} placeholder="Search" />
        <Button>
        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
        </Button>
    </SearchContainer>
    </div>
  )
}

export default SearchBar;
