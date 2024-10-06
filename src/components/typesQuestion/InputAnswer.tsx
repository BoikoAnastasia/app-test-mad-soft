export const InputAnswer = ({
  handleChange,
}: {
  handleChange: (e: string) => void;
}) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleChange(value);
  };

  return (
    <>
    <span>Ваш ответ:</span>
      <input type="text" onChange={handleChangeInput} />
    </>
  );
};
