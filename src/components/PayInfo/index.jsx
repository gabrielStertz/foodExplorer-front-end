import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

import { MdOutlineQrCode2, MdOutlineCheckCircleOutline } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";
import { GiKnifeFork } from "react-icons/gi";

import { Button } from "../Button";

export function PayInfo({isPix, isCredit, isPaid, delivered, onClick, ...rest}){

  const { isDarkModeOn } = useAuth();

  if(delivered){
    return (
      <Container>
        <div className="wait">
          <GiKnifeFork size={150}/>
          <p>Pedido entregue!</p>
        </div>
      </Container>
    );
  } else if(isPaid){
    return (
      <Container>
        <div className="wait">
          <MdOutlineCheckCircleOutline size={150}/>
          <p>Pagamento Aprovado</p>
        </div>
      </Container>
    );
  } else if(isPix){
    return (
      <Container {...rest}>
        <div className="pix">
          <MdOutlineQrCode2 size={300} color="#79797b"/>
        </div>
      </Container>
    );
  } else if(isCredit){
    return (
      <Container className={isDarkModeOn ? "dark" : "light"}>
        <div className="credit">
        <form>
          <div className="input">
            <p>Número do cartão</p>
            <input type="text" placeholder="0000 0000 0000 0000"/>
          </div>
          <div className="val-cvc">
            <div className="input">
              <p>Validade</p>
              <input type="text" placeholder="04/25"/>
            </div>
            <div className="input">
              <p>CVC</p>
              <input type="text" placeholder="000"/>
            </div>
          </div>
          <Button onClick={onClick} title="Finalizar pagamento" icon={TfiReceipt}/>
        </form>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="wait">
          <FiClock size={150}/>
          <p>Aguardando pagamento no caixa</p>
        </div>
      </Container>
    );
  }
};