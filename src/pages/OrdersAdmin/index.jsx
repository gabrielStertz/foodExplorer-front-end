import { Container } from "./style";

import { BsCircleFill } from "react-icons/bs";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function OrdersAdmin(){

  return (
    <Container>
      <Header isAdmin/>
        <h1>Pedidos</h1>

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
                <select name="select">
                  <option value="Pendente" selected><BsCircleFill color="red"/>Pendente</option>
                  <option value="Preparando"><BsCircleFill color="yellow"/>Preparando</option>
                  <option value="Entregue"><BsCircleFill color="green"/>Entregue</option>
                </select>
              </td>
              <td>00004</td>
              <td>1 X Salada Radish, 1 X Salada Ravanello</td>
              <td>20/05 às 20:00</td>
            </tr>
            <tr>
              <td>
                <select>
                  <option value="Pendente"><BsCircleFill color="red"/>Pendente</option>
                  <option value="Preparando" selected><BsCircleFill color="yellow"/>Preparando</option>
                  <option value="Entregue"><BsCircleFill color="green"/>Entregue</option>
                </select>
              </td>
              <td>00003</td>
              <td>1 X Salada Radish, 1 X Salada Ravanello</td>
              <td>20/05 às 20:00</td>
            </tr>
            <tr>
              <td>
              <select name="select">
                  <option value="Pendente"><BsCircleFill color="red"/>Pendente</option>
                  <option value="Preparando"><BsCircleFill color="yellow"/>Preparando</option>
                  <option value="Entregue" selected><BsCircleFill color="green"/>Entregue</option>
                </select>
              </td>
              <td>00002</td>
              <td>1 X Salada Radish, 1 X Salada Ravanello</td>
              <td>20/05 às 20:00</td>
            </tr>
            <tr>
              <td>
              <select name="select">
                  <option value="Pendente"><BsCircleFill color="red"/>Pendente</option>
                  <option value="Preparando"><BsCircleFill color="yellow"/>Preparando</option>
                  <option value="Entregue" selected><BsCircleFill color="green"/>Entregue</option>
                </select>
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