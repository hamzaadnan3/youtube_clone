import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #868686;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 80%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  padding: 5px 15px;
  border: 1px solid #3ae6ff;
  color: #3ae6ff;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <Link to={"signin"} style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            Sign In
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
