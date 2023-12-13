import React, { useState, useEffect } from "react";
import styled from "styled-components";
export default function Welcome() {
  const [username, Setusername] = useState("");
  useEffect(async () => {
    Setusername(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      )
    );
  }, []);
  return (
    <Container>
      <h1>
        Welcome, <span>{username}</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: green;
  }
`;
