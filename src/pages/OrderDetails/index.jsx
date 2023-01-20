import { useState } from "react";

import { Container } from "./style";

import { AiOutlineCreditCard } from "react-icons/ai";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PayInfo } from "../../components/PayInfo";

import imagemPrato from "../../assets/saladaRavanello.png";

export function OrderDetails(){
  const [pix, setPix] = useState(false);
  const [credit, setCredit] = useState(false);

  function handleClickPix(){
    setPix(true);
    setCredit(false);
  };

  function handleClickCredit(){
    setPix(false);
    setCredit(true);
  };

  return (
    <Container>
      <Header/>
      <div className="geral">
        <div className="order">
          <h1>Meu pedido</h1>
          <div>
            <div className="item">
              <img src={imagemPrato} alt="Imagem do prato" />
              <div>
                <div>
                  <p>1 X Salada Ravanello</p>
                  <span>R$ 25,97</span>
                </div>
                <button>Excluir</button>
              </div>
            </div>
            <div className="item">
              <img src={imagemPrato} alt="Imagem do prato" />
              <div>
                <div>
                  <p>1 X Salada Ravanello</p>
                  <span>R$ 25,97</span>
                </div>
                <button>Excluir</button>
              </div>
            </div>
            <div className="item">
              <img src={imagemPrato} alt="Imagem do prato" />
              <div>
                <div>
                  <p>1 X Salada Ravanello</p>
                  <span>R$ 25,97</span>
                </div>
                <button>Excluir</button>
              </div>
            </div>
            <div className="item">
              <img src={imagemPrato} alt="Imagem do prato" />
              <div>
                <div>
                  <p>1 X Salada Ravanello</p>
                  <span>R$ 25,97</span>
                </div>
                <button>Excluir</button>
              </div>
            </div>
          </div>
          <p className="total">Total: R$ 103,88</p>
        </div>
        <div className="pay">
          <h1>Pagamento</h1>
          <div>
            <div className="pay-metod">
              <button className="pix" onClick={handleClickPix} style={{background: pix ? "rgba(255, 255, 255, 0.05)" : "transparent"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 952.77 338.7">
                  <path d="M393.22,316.26V122a64.71,64.71,0,0,1,64.71-64.71l57.35.08A64.62,64.62,0,0,1,579.77,122v41.34a64.72,64.72,0,0,1-64.71,64.72H434" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26"/>
                  <path d="M595.8,57.28h24.88a26.56,26.56,0,0,1,26.56,26.56v145.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26"/>
                  <path d="M641.9,34.8,630.62,23.51a7.16,7.16,0,0,1,0-10.13L641.9,2.1a7.18,7.18,0,0,1,10.15,0l11.27,11.28a7.16,7.16,0,0,1,0,10.13L652,34.8a7.17,7.17,0,0,1-10.14,0" fill="#32bcad"/>
                  <path d="M695,57.15h24.67a47.85,47.85,0,0,1,33.84,14l57.71,57.71a19.13,19.13,0,0,0,27.07,0l57.5-57.49a47.81,47.81,0,0,1,33.83-14h20.06" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26"/>
                  <path d="M695,227.67h24.67a47.86,47.86,0,0,0,33.84-14l57.71-57.71a19.15,19.15,0,0,1,27.07,0l57.5,57.5a47.84,47.84,0,0,0,33.83,14h20.06" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26"/>
                  <path d="M246.13,264.53A46.07,46.07,0,0,1,213.35,251L166,203.62a9,9,0,0,0-12.44,0l-47.51,47.51A46.09,46.09,0,0,1,73.27,264.7H64l60,60a48,48,0,0,0,67.81,0l60.12-60.13Z" fill="#32bcad"/>
                  <path d="M73.28,97.09a46.08,46.08,0,0,1,32.78,13.57l47.51,47.52a8.81,8.81,0,0,0,12.44,0l47.34-47.34a46,46,0,0,1,32.78-13.58h5.7L191.71,37.14a47.94,47.94,0,0,0-67.81,0L64,97.09Z" fill="#32bcad"/>
                  <path d="M301.56,147l-36.33-36.33a7,7,0,0,1-2.58.52H246.13a32.62,32.62,0,0,0-22.93,9.5L175.86,168a22.74,22.74,0,0,1-32.13,0L96.21,120.51A32.62,32.62,0,0,0,73.28,111H53a7.12,7.12,0,0,1-2.44-.49L14,147a48,48,0,0,0,0,67.81l36.48,36.48a6.85,6.85,0,0,1,2.44-.49H73.28a32.63,32.63,0,0,0,22.93-9.51l47.51-47.51c8.59-8.58,23.56-8.58,32.14,0l47.34,47.33a32.62,32.62,0,0,0,22.93,9.5h16.52a6.9,6.9,0,0,1,2.58.52l36.33-36.33a47.94,47.94,0,0,0,0-67.81" fill="#32bcad"/>
                  <path d="M442.54,299.75a42.13,42.13,0,0,0-8.89,1.35v11.84a20.6,20.6,0,0,0,6.92,1.16c5.94,0,8.75-2,8.75-7.23,0-4.92-2.3-7.12-6.78-7.12m-10.89,22V298.32h1.63l.17,1a46.87,46.87,0,0,1,9.26-1.49,9.16,9.16,0,0,1,6.07,1.76c2,1.66,2.68,4.34,2.68,7.26s-1,5.94-3.8,7.53a14.59,14.59,0,0,1-6.89,1.53,24.82,24.82,0,0,1-7.12-1.09v6.89Z" fill="#ffffff"/>
                  <path d="M466.36,299.68c-5.93,0-8.58,1.86-8.58,7.09,0,5.05,2.61,7.33,8.58,7.33s8.55-1.84,8.55-7.06c0-5.05-2.61-7.36-8.55-7.36M474,314.1c-2,1.42-4.62,1.83-7.64,1.83s-5.73-.44-7.66-1.83c-2.17-1.53-3.06-4-3.06-7.19s.89-5.67,3.06-7.23c1.93-1.39,4.58-1.83,7.66-1.83s5.67.44,7.64,1.83c2.2,1.56,3.05,4.1,3.05,7.19s-.88,5.7-3.05,7.23" fill="#ffffff"/>
                  <path d="M502.1,315.45l-6.62-14.21h-.13l-6.52,14.21H487L480,298.32h2.2l5.87,14.38h.14l6.38-14.38h1.83l6.54,14.38h.14l5.73-14.38H511l-7.06,17.13Z" fill="#ffffff"/>
                  <path d="M523.75,299.64c-5.5,0-7.36,2.45-7.7,6h15.4c-.17-3.9-2.17-6-7.7-6m-.07,16.29c-3.29,0-5.43-.48-7.13-1.9-2-1.73-2.67-4.24-2.67-7.12s.91-5.67,3.19-7.33a11.38,11.38,0,0,1,6.68-1.73,12,12,0,0,1,6.85,1.66c2.47,1.66,2.95,4.58,2.95,7.9H516c.07,3.53,1.22,6.65,7.87,6.65a51.75,51.75,0,0,0,8.85-1v1.8a52.33,52.33,0,0,1-9,1.05" fill="#ffffff"/>
                  <path d="M539.3,315.45V298.32h1.62l.17,1c3.63-.92,5.33-1.49,8.52-1.49h.24v1.9h-.48c-2.68,0-4.31.37-8.07,1.35v14.35Z" fill="#ffffff"/>
                  <path d="M561.47,299.64c-5.49,0-7.36,2.45-7.7,6h15.4c-.17-3.9-2.17-6-7.7-6m-.07,16.29c-3.29,0-5.42-.48-7.12-1.9-2-1.73-2.68-4.24-2.68-7.12s.92-5.67,3.19-7.33a11.42,11.42,0,0,1,6.68-1.73,12,12,0,0,1,6.85,1.66c2.48,1.66,3,4.58,3,7.9H553.7c.07,3.53,1.22,6.65,7.87,6.65a51.76,51.76,0,0,0,8.86-1v1.8a52.44,52.44,0,0,1-9,1.05" fill="#ffffff"/>
                  <path d="M593.2,300.83a20.6,20.6,0,0,0-6.92-1.15c-5.94,0-8.75,2-8.75,7.23,0,4.95,2.31,7.12,6.78,7.12a44.06,44.06,0,0,0,8.89-1.33Zm.38,14.62-.18-1a46.06,46.06,0,0,1-9.26,1.5,9,9,0,0,1-6.07-1.77c-2-1.66-2.68-4.34-2.68-7.25,0-3.06,1-5.94,3.8-7.5a14.35,14.35,0,0,1,6.92-1.56,26.18,26.18,0,0,1,7.09,1.08V291.1h2v24.35Z" fill="#ffffff"/>
                  <path d="M624.55,299.75a42.13,42.13,0,0,0-8.89,1.35v11.81a20,20,0,0,0,6.92,1.19c5.94,0,8.75-2,8.75-7.23,0-4.92-2.3-7.12-6.78-7.12m5.12,14.65a14.57,14.57,0,0,1-6.88,1.53,24.35,24.35,0,0,1-7.67-1.29l-.1.81h-1.36V291.1h2v8.17a48.34,48.34,0,0,1,9.06-1.42,9.16,9.16,0,0,1,6.07,1.76c2,1.66,2.68,4.34,2.68,7.26s-1,5.94-3.8,7.53" fill="#ffffff"/>
                  <path d="M636.13,322v-1.86c1,.1,1.9.17,2.54.17,2.48,0,4-.72,5.36-3.53l.65-1.36-9-17.13H638l7.67,14.79h.13l7.29-14.79h2.28l-9.64,19.24c-1.76,3.49-3.66,4.64-7.16,4.64a19.48,19.48,0,0,1-2.47-.17" fill="#fff"/>
                  <path d="M683,305.68h-6.64v6H683c4.58,0,6.31-.51,6.31-3,0-2.68-2.38-3-6.35-3M681.76,296h-5.42v6.1h5.46c4.51,0,6.31-.54,6.31-3.08,0-2.72-2.28-3-6.35-3m10.32,17.88c-2.45,1.56-5.4,1.62-10.79,1.62H671.14V292.22h9.91c4.65,0,7.5.06,9.87,1.49a4.91,4.91,0,0,1,2.38,4.61c0,2.44-1,4.07-3.67,5.16v.13c3,.68,4.92,2.21,4.92,5.5a5,5,0,0,1-2.47,4.72" fill="#fff"/>
                  <path d="M714.84,308.26c-2-.17-4-.27-6.17-.27-3.49,0-4.72.71-4.72,2.31s1,2.3,3.7,2.3a34.52,34.52,0,0,0,7.19-1Zm1,7.19-.13-1a41.11,41.11,0,0,1-9.3,1.5,8.88,8.88,0,0,1-5.19-1.26,5.3,5.3,0,0,1,1-8.78c1.8-.85,4.21-.92,6.42-.92,1.79,0,4.2.1,6.2.24v-.31c0-2.68-1.76-3.56-6.58-3.56-1.86,0-4.14.1-6.31.3v-3.46c2.41-.2,5.13-.33,7.37-.33,3,0,6.07.23,8,1.59s2.34,3.33,2.34,5.87v10.14Z" fill="#fff"/>
                  <path d="M742,315.45V306c0-3.12-1.59-4.24-4.44-4.24a32.63,32.63,0,0,0-7,1.08v12.62h-4.78V298.32h3.9l.17,1.09a39.6,39.6,0,0,1,9.16-1.56,8.45,8.45,0,0,1,5.87,1.76c1.35,1.22,1.86,2.92,1.86,5.36v10.48Z" fill="#fff"/>
                  <path d="M760.26,315.93c-2.21,0-4.62-.31-6.38-1.8-2.1-1.7-2.71-4.37-2.71-7.26,0-2.71.88-5.67,3.49-7.33,2.14-1.39,4.78-1.69,7.53-1.69,2,0,3.9.13,6,.33v3.67c-1.73-.17-3.8-.3-5.46-.3-4.55,0-6.69,1.42-6.69,5.36,0,3.69,1.6,5.29,5.33,5.29a40.69,40.69,0,0,0,7.19-.88v3.52a42.64,42.64,0,0,1-8.34,1.09" fill="#fff"/>
                  <path d="M782.73,301.44c-4.55,0-6.55,1.43-6.55,5.33s2,5.56,6.55,5.56,6.48-1.39,6.48-5.29-1.93-5.6-6.48-5.6m8.21,12.69c-2.1,1.42-4.85,1.8-8.21,1.8s-6.17-.41-8.24-1.8c-2.38-1.56-3.23-4.14-3.23-7.22s.85-5.71,3.23-7.27c2.07-1.39,4.81-1.79,8.24-1.79s6.11.4,8.21,1.79c2.37,1.56,3.19,4.18,3.19,7.23s-.85,5.7-3.19,7.26" fill="#fff"/>
                  <path d="M821.74,315.93c-2.88,0-6-.48-8.34-2.41-2.78-2.31-3.63-5.87-3.63-9.7,0-3.43,1.09-7.5,4.71-9.87,2.82-1.83,6.31-2.21,9.84-2.21,2.58,0,5.23.17,8.11.41v4.17c-2.47-.2-5.53-.37-7.9-.37-6.62,0-9.43,2.51-9.43,7.87s2.61,7.9,7.49,7.9a52.84,52.84,0,0,0,10.35-1.39v4.14a58,58,0,0,1-11.2,1.46" fill="#fff"/>
                  <path d="M847,300.9c-4,0-5.5,1.43-5.81,4h11.54c-.14-2.78-1.77-4-5.73-4m-.72,15c-2.81,0-5.36-.34-7.26-1.9s-2.75-4.24-2.75-7.16c0-2.61.85-5.53,3.23-7.23,2.1-1.49,4.78-1.79,7.5-1.79,2.44,0,5.32.27,7.42,1.73,2.75,1.93,3,4.92,3,8.44H841.16c.1,2.62,1.49,4.31,6.31,4.31a61.81,61.81,0,0,0,9.13-.88v3.36a65.31,65.31,0,0,1-10.32,1.12" fill="#fff"/>
                  <path d="M878.72,315.45V306c0-3.12-1.59-4.24-4.44-4.24a32.63,32.63,0,0,0-7,1.08v12.62h-4.78V298.32h3.9l.17,1.09a39.6,39.6,0,0,1,9.16-1.56,8.45,8.45,0,0,1,5.87,1.76c1.35,1.22,1.86,2.92,1.86,5.36v10.48Z" fill="#fff"/>
                  <path d="M897.09,315.93c-2.31,0-4.41-.65-5.56-2.45a8.85,8.85,0,0,1-1.26-5.18v-6.42h-3.46v-3.56h3.46l.51-5.19H895v5.19h6.75v3.56H895v5.5a8.26,8.26,0,0,0,.47,3.26c.51,1.15,1.63,1.59,3.13,1.59a21.3,21.3,0,0,0,3.42-.34v3.43a27.57,27.57,0,0,1-4.95.61" fill="#fff"/>
                  <path d="M906.44,315.45V298.32h3.9l.17,1.09a29.76,29.76,0,0,1,8.48-1.56,5.23,5.23,0,0,1,.61,0V302c-.54,0-1.19,0-1.66,0a26.94,26.94,0,0,0-6.72.88v12.65Z" fill="#fff"/>
                  <path d="M937,308.26c-2-.17-4-.27-6.18-.27-3.49,0-4.71.71-4.71,2.31s1,2.3,3.69,2.3a34.61,34.61,0,0,0,7.2-1Zm1,7.19-.14-1a41.11,41.11,0,0,1-9.3,1.5,8.88,8.88,0,0,1-5.19-1.26,4.87,4.87,0,0,1-1.9-4.14,4.81,4.81,0,0,1,2.89-4.64c1.8-.85,4.2-.92,6.41-.92,1.8,0,4.21.1,6.21.24v-.31c0-2.68-1.77-3.56-6.58-3.56-1.87,0-4.14.1-6.31.3v-3.46c2.41-.2,5.12-.33,7.36-.33,3,0,6.07.23,8,1.59s2.34,3.33,2.34,5.87v10.14Z" fill="#fff"/>
                  <path d="M947.92,291.1h4.79v24.35h-4.79Z" fill="#fff"/>
                </svg>
              </button>
              <button onClick={handleClickCredit} style={{background: credit ? "rgba(255, 255, 255, 0.05)" : "transparent"}}>
                <AiOutlineCreditCard size={20} color="#ffffff"/>
                 Crédito
              </button>
            </div>
            <div className="pay-info">
              <PayInfo isPix={pix} isCredit={credit}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  );
};