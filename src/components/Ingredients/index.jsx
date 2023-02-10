import { Container } from "./style";

import { FiPlus, FiX } from 'react-icons/fi'

export function Ingredients({ isNew, value, onClick, ...rest }){
  return(
    <Container isNew={isNew}>
      <input type="text" value={value} style={{border: 0}} readOnly={!isNew} {...rest}/>
      <button type='button' onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>  
    </Container>
  );
};