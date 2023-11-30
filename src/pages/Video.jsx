import React from "react";
import styled from "styled-components";
import video from "../assets/video.mp4";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Cards from "../components/Cards"

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
const Content = styled.div`
  flex: 5;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoWrapper = styled.div`
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 15px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            src={video}
            width={"100%"}
            height={"400"}
            title="Video Player"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
            style={{ borderRadius: "10px" }}
          ></iframe>
        </VideoWrapper>
        <Title>Tst video</Title>
        <Details>
          <Info>70000 Views . Jun 20, 2020</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmCNj21G3JtN_devZD6Q8LBMLzJg0rz_VBw&usqp=CAU" />
            <ChannelDetail>
              <ChannelName>Web dev</ChannelName>
              <ChannelCounter>200k Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                illo reiciendis aliquid voluptatum totam praesentium odit minus
                repellendus voluptate, ducimus aliquam amet, molestias iste
                corrupti cum ab quisquam nihil. Corporis, asperiores. Inventore,
                dolores nemo.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Cards type={"sm"}/>
        <Cards type={"sm"}/>
        <Cards type={"sm"}/>
        <Cards type={"sm"}/>
        <Cards type={"sm"}/>
        <Cards type={"sm"}/>
        <Cards type={"sm"}/>
        <Cards type={"sm"}/>
        <Cards type={"sm"}/>
        <Cards type={"sm"}/>
      </Recommendation>
    </Container>
  );
};

export default Video;
