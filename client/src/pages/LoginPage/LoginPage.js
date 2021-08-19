import React from "react";
import { Container, Content } from "./styles";

export default function LoginPage() {
  return (
    <Container>
      <Content>
        <input type="text" name="user" id="user" />
        <input type="password" name="password" id="password" />
        <button>LOGIN</button>
      </Content>
    </Container>
  );
}
