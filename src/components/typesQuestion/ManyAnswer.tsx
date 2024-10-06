//react
import { useEffect, useState } from "react";
//share
import { IOptions } from "../../types/share";

export const ManyAnswer = ({
  options,
  handleChange,
  selectedValue,
}: {
  options: IOptions;
  selectedValue: string | null;
  handleChange: (e: string) => void;
}) => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  useEffect(() => {
    if (selectedValue === null) {
      setCheckedValues([]);
    }
  }, [selectedValue]);

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (e.target.checked && !checkedValues.includes(value)) {
      setCheckedValues((checkedValues) => [...checkedValues, value]);
    }
    if (!e.target.checked && checkedValues.includes(value)) {
      setCheckedValues((checkedValues) =>
        checkedValues.filter((item) => item !== value)
      );
    }
    handleChange(checkedValues.join(", "));
  };

  return (
    <>
      {Object.keys(options).map((key: string) => (
        <div key={key}>
          <input
            type="checkbox"
            value={key}
            onChange={handleChangeCheckbox}
            checked={checkedValues.includes(key)}
          />
          <span>{options[key]}</span>
        </div>
      ))}
    </>
  );
};
