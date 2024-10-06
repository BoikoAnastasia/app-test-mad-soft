export const InputAnswer = ({
  handleChange,
}: {
  handleChange: (e: any) => void;
}) => {
  const handleChangeInput = (e: any) => {
    const { value } = e.target;
    handleChange(value);
  };

  return (
    <>
      <input type="text" onChange={handleChangeInput} />
    </>
  );
};
