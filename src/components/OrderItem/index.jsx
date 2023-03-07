import { Container } from "./style";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

export function OrderItem({data}){

  const { removeOrder } = useAuth();

  const pictureUrl = `${api.defaults.baseURL}/files/${data.picture}`;

  return (
    <Container>
      <img src={pictureUrl} alt="Imagem do prato" />
      <div>
        <div>
          <p>1 X {data.name}</p>
          <span>{data.price}</span>
        </div>
        <button onClick={() => removeOrder(data.id)}>Excluir</button>
      </div>
    </Container>
  );
};