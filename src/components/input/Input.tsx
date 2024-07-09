import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface inputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  label?: String;
  placeholder? :String | any;
  name? :String | any;
}

const Input = ({
  value,
  disabled,
  onChange,
  type = "text",
  label,
  placeholder,
  name
}: inputProps) => {
  return (
    <div className="relative w-full lg:w-[30rem]">
      <input
        onChange={onChange}
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className="text-[22px] font-medium border-b-2 w-[452px] outline-none placeholder-black border-[#828282] placeholder-shown:text-black"
      />
    </div>
  );
};

export default Input;
