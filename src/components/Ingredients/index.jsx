import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

import { FiPlus, FiX } from 'react-icons/fi'

export function Ingredients({ isNew, value, onClick, ...rest }){

  const { isDarkModeOn } = useAuth();

  return(
    <Container isNew={isNew} className={isDarkModeOn ? "dark" : "light"}>
      <input type="text" value={value} style={{border: 0}} readOnly={!isNew} {...rest}/>
      <button type='button' onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>  
    </Container>
  );
};