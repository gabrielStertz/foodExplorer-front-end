import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container, Form } from "./style";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp(){

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os compos!");
    };

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
      };
    });
  };

  function handleClickBack(){
    navigate("/");
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
        <h1>Crie sua conta</h1>
        <Input
          title="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onChange={e => setName(e.target.value)}
        />
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
          title="Criar conta"
          onClick={handleSignUp}
        />
        <button onClick={handleClickBack}>Já tenho uma conta</button>
      </Form>
    </Container>
  );
};