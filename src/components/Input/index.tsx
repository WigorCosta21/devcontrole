"use client";

import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface IInputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export const Input = ({
  type,
  placeholder,
  name,
  register,
  error,
  rules,
}: IInputProps) => {
  return (
    <>
      <input
        className="w-full border-2 rounded-md h-11 px-2"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-500 my-1">{error}</p>}
    </>
  );
};
