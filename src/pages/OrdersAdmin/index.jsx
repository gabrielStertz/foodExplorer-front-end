import { useNavigate } from "react-router-dom";

import { Container } from "./style";

import { FiChevronLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function OrdersAdmin(){

  const navigate = useNavigate();

  function handleSelect(e){
    const select = e.target;
    const divSelect = e.target.parentElement;
    if(select.value === "Pendente"){
      divSelect.classList.add("pendente");
      divSelect.classList.remove("preparando");
      divSelect.classList.remove("entregue");
    } else if(select.value === "Preparando"){
      divSelect.classList.remove("pendente");
      divSelect.classList.add("preparando");
      divSelect.classList.remove("entregue");
    } else if(select.value === "Entregue"){
      divSelect.classList.remove("pendente");
      divSelect.classList.remove("preparando");
      divSelect.classList.add("entregue");
    };
  };

  function handleBack(){
    navigate("/");
  };

  return (
    <Container>
      <Header isAdmin/>
      <div className="title">
        <h1>Pedidos</h1>
        <button onClick={handleBack}><FiChevronLeft size={20}/>Voltar</button>
      </div>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <div className="select" id="select">
                <select id="select-standard" defaultValue={"Pendente"} onChange={e => handleSelect(e)}>
                  <option value="Pendente">Pendente</option>
                  <option value="Preparando">Preparando</option>
                  <option value="Entregue">Entregue</option>
                </select>
                <span className="focus"></span>
                </div>
              </td>
              <td>00004</td>
              <td>1 X Salada Radish, 1 X Salada Ravanello</td>
              <td>20/05 às 20:00</td>
            </tr>
            <tr>
              <td>
                <div className="select" id="select">
                <select id="select-standard" defaultValue={"Pendente"} onChange={e => handleSelect(e)}>
                  <option value="Pendente">Pendente</option>
                  <option value="Preparando">Preparando</option>
                  <option value="Entregue">Entregue</option>
                </select>
                <span className="focus"></span>
                </div>
              </td>
              <td>00003</td>
              <td>1 X Salada Radish, 1 X Salada Ravanello</td>
              <td>20/05 às 20:00</td>
            </tr>
            <tr>
              <td>
              <div className="select" id="select">
                <select id="select-standard" defaultValue={"Pendente"} onChange={e => handleSelect(e)}>
                  <option value="Pendente">Pendente</option>
                  <option value="Preparando">Preparando</option>
                  <option value="Entregue">Entregue</option>
                </select>
                <span className="focus"></span>
                </div>
              </td>
              <td>00002</td>
              <td>1 X Salada Radish, 1 X Salada Ravanello</td>
              <td>20/05 às 20:00</td>
            </tr>
            <tr>
              <td>
              <div className="select" id="select">
                <select id="select-standard" defaultValue={"Pendente"} onChange={e => handleSelect(e)}>
                  <option value="Pendente">Pendente</option>
                  <option value="Preparando">Preparando</option>
                  <option value="Entregue">Entregue</option>
                </select>
                <span className="focus"></span>
                </div>
              </td>
              <td>00001</td>
              <td>1 X Salada Radish, 1 X Salada Ravanello</td>
              <td>20/05 às 20:00</td>
            </tr>
            </tbody>  
        </table>        

      <Footer/>
    </Container>
  );
};