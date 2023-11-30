import React from "react";
import styled from "styled-components";
import logoImg from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1.3;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  overflow-y: auto;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  padding: 5px 15px;
  border: 1px solid #3ae6ff;
  color: #3ae6ff;
  font-weight: 500;
  margin-top: 10px;
  border-radius: 3px;
  cursor: pointer;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logoImg} />
            Youtube
          </Logo>
        </Link>
        <Items>
          <HomeIcon />
          Home
        </Items>
        <Items>
          <ExploreOutlinedIcon />
          Explore
        </Items>
        <Items>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Items>
        <Hr />
        <Items>
          <VideoLibraryOutlinedIcon />
          Library
        </Items>
        <Items>
          <HistoryOutlinedIcon />
          History
        </Items>
        <Hr />
        <Login>
          Sign In to like videos, comment and sunscribe.
          <Link to={"signin"} style={{textDecoration:"none"}}>
          <Button>
            <AccountCircleOutlinedIcon />
            Sign In
          </Button>
          </Link>
        </Login>
        <Hr />
        <Items>
          <LibraryMusicOutlinedIcon />
          Music
        </Items>
        <Items>
          <SportsBasketballOutlinedIcon />
          Sports
        </Items>
        <Items>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Items>
        <Items>
          <MovieOutlinedIcon />
          Movies
        </Items>
        <Items>
          <ArticleOutlinedIcon />
          News
        </Items>
        <Items>
          <LiveTvOutlinedIcon />
          Live
        </Items>
        <Hr />
        <Items>
          <SettingsOutlinedIcon />
          Settings
        </Items>
        <Items>
          <FlagOutlinedIcon />
          Report
        </Items>
        <Items>
          <HelpOutlineOutlinedIcon />
          Help
        </Items>
        <Items onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Menu;
