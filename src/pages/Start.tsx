import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Start = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    localStorage.clear()
  },)
  return (
    <>
      <h1>Тестирование</h1>
      <button onClick={() => navigate("/test")}>Начать тест</button>
    </>
  );
};
