import { useNavigate } from "react-router-dom";

import { Container } from "./style";

import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";

import imagemPrato from "../../assets/saladaRavanello.png";
import imagemAlface from "../../assets/alface.png";
import imagemTomate from "../../assets/tomate.png";
import imagemRabanete from "../../assets/rabanete.png";
import imagemPao from "../../assets/paoNaan.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export function Details(){

  const navigate = useNavigate();

  function handleBack(){
    navigate("/");
  };

  return (
    <Container>
      <Header/>
        <button className="back-button" onClick={handleBack}><FiChevronLeft size={24}/> voltar</button>
        <div className="geral">
          <img src={imagemPrato} alt="imagem do prato" />
          <div className="information">
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <div className="ingredients">
              <div>
                <img src={imagemAlface} alt="imagem de alface" />
                <p>alface</p>
              </div>
              <div>
                <img src={imagemTomate} alt="imagem de tomate" />
                <p>tomate</p>
              </div>
              <div>
                <img src={imagemRabanete} alt="imagem de rabanete" />
                <p>rabanete</p>
              </div>
              <div>
                <img src={imagemPao} alt="imagem de pão naan" />
                <p>pão naan</p>
              </div>
            </div>
            <div className="price-and-buttons">
              <p>R$ 25,97</p>
              <div>
                <button><FiMinus size={20}/></button>
                <span>01</span>
                <button><FiPlus size={20}/></button>
              </div>
              <Button title="incluir" icon={TfiReceipt}/>
            </div>
          </div>
        </div>
      <Footer/>
    </Container>
  );

};