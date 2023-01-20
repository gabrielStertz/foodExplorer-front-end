import { Container } from "./style";

import { BsCircleFill } from "react-icons/bs";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Orders(){

  return (
    <Container>
      <Header/>
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
              <button>
                <BsCircleFill color="red"/>
                <span>Pendente</span>
              </button>
              </td>
              <td><button>00004</button></td>
              <td><button>1 X Salada Radish, 1 X Salada Ravanello</button></td>
              <td><button>20/05 às 20:00</button></td>
            </tr>
            <tr>
              <td>
                <button>
                  <BsCircleFill color="yellow"/>
                  <span>Preparando</span>
                </button>
              </td>
              <td><button>00003</button></td>
              <td><button>1 X Salada Radish, 1 X Salada Ravanello</button></td>
              <td><button>20/05 às 20:00</button></td>
            </tr>
            <tr>
              <td>
                <button>
                  <BsCircleFill color="green"/>
                  <span>Entregue</span>
                </button>
              </td>
              <td><button>00002</button></td>
              <td><button>1 X Salada Radish, 1 X Salada Ravanello</button></td>
              <td><button>20/05 às 20:00</button></td>
            </tr>
            <tr>
              <td>
                <button>
                  <BsCircleFill color="green"/>
                  <span>Entregue</span>
                </button>
              </td>
              <td><button>00001</button></td>
              <td><button>1 X Salada Radish, 1 X Salada Ravanello</button></td>
              <td><button>20/05 às 20:00</button></td>
            </tr>
            </tbody>  
        </table>        

      <Footer/>
    </Container>
  );
};