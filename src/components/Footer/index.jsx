import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

import { BiRegistered } from "react-icons/bi"; 

export function Footer(){

  const { isDarkModeOn } = useAuth();

  return (
    <Container className={isDarkModeOn ? "dark" : "light"}>
      <div className="logo">
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
        </svg>
        <p>food explorer</p>
      </div>
      <p className="registered">
        <BiRegistered/> 2022 - Todos os direitos reservados.
      </p>
    </Container>
  );
};