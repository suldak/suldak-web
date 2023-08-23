import { useState, ChangeEvent } from 'react';

interface IUseInput {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

/** 인풋 커스텀훅 */
const useInput = (initialValue: string): IUseInput => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return { value, onChange, reset };
};

export default useInput;
