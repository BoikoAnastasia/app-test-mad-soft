export const OneAnswer = ({ options, handleChange }: 
    { options: any, handleChange: (e:any) => void }) => {
    return (
    <>
      {Object.keys(options).map((key: any, i: any) => (
        <div key={key}>
          <span>{options[key]}</span>
          <input type="radio" name="answerOne" value={key} onChange={handleChange}/>
        </div>
      ))}
    </>
  );
};
