import { useLocation, useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import { FinishProps } from "../types/share";

export const Finish: FC = () => {  
  const navigate = useNavigate();  
  const location = useLocation();
  
  const state = location.state as FinishProps | undefined; 

  useEffect(() => { 
    localStorage.clear()
    if (!state) { 
      navigate("/", { replace: true }); 
    } 
  }, [state, navigate]); 

  if (!state) { 
    return null; 
  } 

  const { count, questionsLength } = state;  
  
  return ( 
    <> 
      <h1>Результаты:</h1> 
      <span> 
        Ты набрал: {count} из {questionsLength} 
      </span> 
    </> 
  ); 
};
