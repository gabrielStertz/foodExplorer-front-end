import { Container } from "./style";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function MenuTypes({title, onClickScrollBack, onClickScrollFront, children, ...rest}){

    
  return (
    <Container {...rest}>
      <h1>{title}</h1>
      <div key={title} id={title} className="cards-and-buttons">
        <button className="back" onClick={onClickScrollBack}><FiChevronLeft size={30}/></button> 
        {children}
        <button className="front" onClick={onClickScrollFront}><FiChevronRight size={30}/></button>
      </div>
    </Container>
  );
};