import React, { Component } from "react";
import styled, { css } from "styled-components";

function Index(props) {
  return (
    <Container>
      <Title>
        <Rect>
          <WouldYouRather>Would You Rather...?</WouldYouRather>
        </Rect>
      </Title>
      <Nav>
        <Rect2>
          <MenuRow>
            <Menu>
              <HomeMenuRow>
                <HomeMenu>Home</HomeMenu>
                <NewQuestionMenu>New Question</NewQuestionMenu>
                <LeaderBoardMenu>Leader Board</LeaderBoardMenu>
              </HomeMenuRow>
            </Menu>
            <DashBoard>
              <GreetingRow>
                <Greeting>Hello, Sarah Edo</Greeting>
                <Image src=""></Image>
                <Logout>Logout</Logout>
              </GreetingRow>
            </DashBoard>
          </MenuRow>
        </Rect2>
        <Rect3></Rect3>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1366px;
  height: 92px;
  flex-direction: column;
`;

const Title = styled.div`
  width: 1366px;
  height: 36px;
  flex-direction: column;
  display: flex;
`;

const Rect = styled.div`
  width: 1366px;
  height: 36px;
  background-color: rgba(0, 173, 181, 1);
  flex-direction: column;
  display: flex;
`;

const WouldYouRather = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(238, 238, 238, 1);
  font-size: 16px;
  margin-top: 8px;
  margin-left: 621px;
`;

const Nav = styled.div`
  width: 1366px;
  height: 56px;
  flex-direction: column;
  display: flex;
`;

const Rect2 = styled.div`
  width: 1366px;
  height: 56px;
  background-color: rgba(57, 62, 70, 1);
  flex-direction: row;
  display: flex;
`;

const Menu = styled.div`
  width: 354px;
  height: 16px;
  flex-direction: row;
  display: flex;
  margin-top: 11px;
`;

const HomeMenu = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(238, 238, 238, 1);
  height: 16px;
  width: 38px;
`;

const NewQuestionMenu = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(238, 238, 238, 1);
  height: 16px;
  width: 101px;
  margin-left: 61px;
`;

const LeaderBoardMenu = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(238, 238, 238, 1);
  height: 16px;
  width: 110px;
  margin-left: 44px;
`;

const HomeMenuRow = styled.div`
  height: 16px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const DashBoard = styled.div`
  width: 201px;
  height: 36px;
  flex-direction: row;
  display: flex;
  margin-left: 234px;
`;

const Greeting = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(238, 238, 238, 1);
  margin-top: 11px;
`;

const Image = styled.img`
  width: 100%;
  height: 36px;
  margin-left: 112px;
  object-fit: contain;
`;

const Logout = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: rgba(238, 238, 238, 1);
  margin-left: 11px;
  margin-top: 11px;
`;

const GreetingRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 44px;
`;

const MenuRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 220px;
  margin-left: 357px;
  margin-top: 9px;
`;

const Rect3 = styled.div`
  width: 1366px;
  height: 1px;
  background-color: rgba(238, 238, 238, 1);
`;

export default Index;
