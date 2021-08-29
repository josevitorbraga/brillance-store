import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Container, Content } from "./styles";
import { toast } from "react-toastify";

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
    console.log(response);
    if (response.status === 200) {
      history.replace("/admin/home");
    } else {
      toast.error("Falha ao logar");
    }
  };

  useEffect(() => {
    const checkIsAlreadyLoggedIn = async () => {
      const response = await axios.get("/users/check");
      if (response.status === 200) {
        history.replace("/admin/home");
      } else if (response.status === 401) {
        toast.error(response.data.message);
      }
    };
    checkIsAlreadyLoggedIn();
  }, []);

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
