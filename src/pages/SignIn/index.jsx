import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn(){

  const { signIn } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClickNewAccount(){
    navigate("/register")
  };

  function handleSignIn(){
    signIn({ email, password });
  };

  return (
    <Container>
      <div className="logo">
          <svg width="38" height="42" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
          </svg>
          <p>food explorer</p>
      </div>
      <Form>
        <h1>Faça Login</h1>
        <Input
          title="E-mail"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          title="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          title="Entrar"
          onClick={handleSignIn}
        />
        <button onClick={handleClickNewAccount}>Criar uma conta</button>
      </Form>
    </Container>
  );
};