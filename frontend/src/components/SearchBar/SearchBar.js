import React, { useState } from "react";
import { userRequest } from "../../requestMethod";
import { mobile } from "../../responsive";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchContainer = styled.div`
  background-color: white;
  border: 0.5px solid white;
  display: flex;
  align-items: center;
  // margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  background: white;
  outline: none;
  border: none;
  width: 400px;
  ${mobile({ width: "50px" })}

  @media (max-width: 1015px) {
    width: 300px;
  }
`;

const Button = styled.button`
  border: none;
  background: white;
`;

const DataItem = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;

  &:hover {
    background-color: lightgray;
  }
`;

const DataItemResult = styled.p`
  // margin-left: 10px;
  margin-top: 10px;
  padding: 10px 0px 0px 10px;
`;

const DataResult = styled.div`
  margin-top: 5px;
  width: 500px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  z-index: 1;
  overflow-y: auto;
  //  left: 0;
  //  right: 0;
  //  top: 40px;
  position: absolute;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1015px) {
    width: 400px;
  }
`;

export const SearchBar = () => {
  const [searchData, setSearchData] = useState([]);

  const changeHandler = (e) => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.get("/products");
        const filteredData = res.data
          .map((data) => ({ id: data._id, title: data.title }))
          .filter((data) =>
            data.title.toLowerCase().includes(e.target.value.toLowerCase())
          );

        if (e.target.value === "") {
          setSearchData([]);
        } else {
          setSearchData(filteredData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  };

  return (
    <div>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search"
          onChange={changeHandler}
        ></Input>
        <Button>
          <SearchIcon />
        </Button>
      </SearchContainer>
      {searchData.length !== 0 && (
        <DataResult>
          {searchData.slice(0, 15).map((value, key) => {
            return (
              <Link to={`/product/${value.id}`} style={{ color: "black" }}>
                <DataItem>
                  <DataItemResult>{value.title}</DataItemResult>
                </DataItem>
              </Link>
            );
          })}
        </DataResult>
      )}
    </div>
  );
};

export default SearchBar;
