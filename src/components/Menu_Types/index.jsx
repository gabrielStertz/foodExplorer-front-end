import { Container } from "./style";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Menu_Types({title, children, ...rest}){

  return (
    <Container {...rest}>
      <h1>{title}</h1>
      <button className="back"><FiChevronLeft size={16}/></button>
      {children}
      <button className="front"><FiChevronRight size={16}/></button>
    </Container>
  );
};