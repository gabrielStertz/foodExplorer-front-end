import { Container } from "./style";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function MenuTypes({title, children, ...rest}){

  return (
    <Container {...rest}>
      <h1>{title}</h1>
      <div className="cards-and-buttons">
        <button className="back"><FiChevronLeft size={30}/></button> 
          <div className="cards">
            {children}
          </div>
        <button className="front"><FiChevronRight size={30}/></button>
      </div>
    </Container>
  );
};