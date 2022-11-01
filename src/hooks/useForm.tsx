import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
  const [formState, setFormState] = useState<T>(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    handleChange,
  };
};
