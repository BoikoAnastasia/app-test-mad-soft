export const OneAnswer = ({ 
  options, 
  selectedValue, 
  handleChange, 
}: { 
  options: any; 
  selectedValue: string | null; 
  handleChange: (e: string) => void; 
}) => { 
  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { value } = e.target; 
    handleChange(value); 
  }; 

  return ( 
    <> 
      {Object.keys(options).map((key: string) => (
        <div key={key}> 
          <input 
            type="radio" 
            name="answerOne" 
            value={key} 
            checked={selectedValue === key}
            onChange={handleChangeRadio} 
          /> 
          <span>{options[key]}</span> 
        </div> 
      ))} 
    </> 
  ); 
};