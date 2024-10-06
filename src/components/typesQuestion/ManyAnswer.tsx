import { useState } from "react";

export const ManyAnswer = ({ options, handleChange }: 
    { options: any, handleChange: (e:any) => void }) => {
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    
    const handleChangeCheckbox = (e: any) => {
        const {value} = e.target;
        if(e.target.checked && !checkedValues.includes(value)){
            setCheckedValues(checkedValues => [...checkedValues, value])
        }
        if(!e.target.checked && checkedValues.includes(value)){
            setCheckedValues(checkedValues => checkedValues.filter(item => item !== value))
        }
        handleChange(checkedValues.join(", "))
      };
    

    return (
        <>
        {Object.keys(options).map((key: any, i: any) => (
          <div key={key}>
            <span>{options[key]}</span>
            <input type="checkbox" value={key} onChange={handleChangeCheckbox}/>
          </div>
        ))}
      </>
    )
};