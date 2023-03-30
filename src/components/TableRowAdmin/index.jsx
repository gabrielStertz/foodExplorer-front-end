import { useState, useEffect } from "react";

import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export function TableRowAdmin({ data }){

  const [code, setCode] = useState("");
  const [menuList, setMenuList] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [status, setStatus] = useState("");

  const { isDarkModeOn } = useAuth();

  function handleCode(){
    
    const numberZeros = 10 - Number(String(data.id).length);
    const addZeros = String(data.id).padStart(numberZeros, "0");

    setCode(addZeros);
  };
  function handleMenu(){
    let orderItems = "";
    data.menu_list.map(item => {
      orderItems = orderItems + `1 X ${item.name}, `;
    });
    setMenuList(orderItems);
  };

  function handleDateTime(){
    const [date, time] = data.updated_at.split(" ");
    const [year, month, day] = date.split("-");
    const [hour, minutes, seconds] = time.split(":");
    const dateTimeEdited = `${day}/${month} às ${hour}:${minutes}`;

    setDateTime(dateTimeEdited);
  };
    
  async function handleSelect(e){

    const paid = "true";
   
    setStatus(e.target.value)
    try {
      await api.put(`/orders-admin/${data.id}`, { status: e.target.value });
      if(e.target.value === "Preparando"){
        await api.put(`/order-payment/${data.id}`, { paid });
      };
    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível acessar");
      };
    };
  };

  useEffect(() => {

    handleDateTime();
    handleMenu();
    handleCode();
    setStatus(data.status);
  }, []);

  return(
    <Container className={isDarkModeOn ? "dark" : "light"}>
      <td>
        <div className={status} id="select">
          <select id="select-standard" defaultValue={data.status} onChange={e => handleSelect(e)}>
            <option value="Pendente">Pendente</option>
            <option value="Preparando">Preparando</option>
            <option value="Entregue">Entregue</option>
          </select>
          <span className="focus"></span>
        </div>
      </td>
      <td>{code}</td>
      <td>{menuList}</td>
      <td>{dateTime}</td>
    </Container>
  );
};