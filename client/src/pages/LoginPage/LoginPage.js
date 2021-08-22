import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Container, Content } from "./styles";

export default function LoginPage() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async e => {
    e.preventDefault();
    const response = await axios.post("/users/signin", {
      user: user,
      password: password,
    });
    if (response.status === 200) {
      history.replace("/admin/home");
    }
  };
  return (
    <Container>
      <div className="loginInfo">
        <h1>Login</h1>
      </div>
      <Content>
        <form onSubmit={submitHandler}>
          <label htmlFor="user">Usuário</label>
          <input
            type="text"
            name="user"
            id="user"
            required
            onChange={e => setUser(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">LOGIN</button>
        </form>
      </Content>
    </Container>
  );
}
