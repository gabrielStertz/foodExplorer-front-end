import { useState, useEffect } from "react";

import { Container } from "./style";

import { BsCircleFill } from "react-icons/bs";

export function TableRow({ data }){

  const [color, setColor] = useState("");
  const [code, setCode] = useState("");
  const [menuList, setMenuList] = useState("");
  const [dateTime, setDateTime] = useState("");

  function handleStatusColor(){
    if(data.status === "Entregue"){
      setColor("green");
    } else if(data.status === "Preparando"){
      setColor("yellow");
    } else {
      setColor("red");
    };
  };

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
    const [date, time] = data.created_at.split(" ");
    const [year, month, day] = date.split("-");
    const [hour, minutes, seconds] = time.split(":");
    const dateTimeEdited = `${day}/${month} às ${hour}:${minutes}`;

    setDateTime(dateTimeEdited);
  };

  useEffect(() => {

    handleDateTime();
    handleMenu();
    handleCode();
    handleStatusColor();

  }, []);

  return(
    <Container>
      <td>
        <BsCircleFill color={color}/>
        <span>{data.status}</span>
      </td>
      <td>{code}</td>
      <td>{menuList}</td>
      <td>{dateTime}</td>
    </Container>
  );
};