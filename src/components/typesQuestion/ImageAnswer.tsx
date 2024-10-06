import { useState } from "react";

export const ImageAnswer = ({
  options,
  handleChange,
}: {
  options: any;
  handleChange: (e: any) => void;
}) => {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    const handleImages = (key: any) => {
      setActiveKey(key);
      handleChange(key)
    };
  
    return ( 
      <> 
        {Object.keys(options).map((key: any) => ( 
          <button 
            className={` ${activeKey === key ? 'active-img' : ''}`} 
            key={key} 
            onClick={() => handleImages(key)}
          > 
            <img className="images" src={options[key]} alt={options[key]} /> 
          </button> 
        ))} 
      </> 
  );
};
