import { Container } from "./style";

export function HeaderInput({icon: Icon, ...rest}){
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <input {...rest} />
    </Container>
  );
};