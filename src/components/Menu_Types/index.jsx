import { Container } from "./style";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function MenuTypes({title, children, ...rest}){

  function handleScrollBack(e){
    let container;
    if(e.tagName === "BUTTON"){
      container = e.parentElement;
    } else if(e.tagName === "svg") {
      container = e.parentElement.parentElement;
    } else {
      container = e.parentElement.parentElement.parentElement;
    };
    container.scrollLeft -= 100;
  };
  function handleScrollFront(e){
    let container;
    if(e.tagName === "BUTTON"){
      container = e.parentElement;
    } else if(e.tagName === "svg") {
      container = e.parentElement.parentElement;
    } else {
      container = e.parentElement.parentElement.parentElement;
    };
    container.scrollLeft += 100;
  };
    
  return (
    <Container {...rest}>
      <h1>{title}</h1>
      <div key={title} id={title} className="cards-and-buttons">
        <button className="back" onClick={e => handleScrollBack(e.target)}><FiChevronLeft size={50}/></button> 
        {children}
        <button className="front" onClick={e => handleScrollFront(e.target)}><FiChevronRight size={50}/></button>
      </div>
    </Container>
  );
};