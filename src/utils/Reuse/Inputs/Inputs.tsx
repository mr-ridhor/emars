import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
interface TextInputsProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
}

export const TextInputs: React.FC<TextInputsProps> = ({
  onChange,
  value,
  label,
  type,
}) => {
  return (
    <div className="w-full   flex-col flex gap-3 ">
      <span className="flex justify-start">{label}</span>
      <input
        value={value}
        type={type}
        onChange={onChange}
        className="border  w-full rounded-md p-2 focus:outline-none"
      />
    </div>
  );
};

interface Passprops {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
  }
  
  export const PasswordInput: React.FC<Passprops> = ({
    onChange,
    value,
    label,
  }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="w-full flex-col flex gap-3">
        <span className="flex justify-start">{label}</span>
        <div className="h-11 relative flex items-center border w-full rounded-md">
          <input
            value={value}
            type={showPassword ? "text" : "password"} // Toggle the input type
            onChange={onChange}
            className="px-2 focus:outline-none flex-1"
          />
          <span className="absolute right-2 cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </span>
        </div>
      </div>
    );
  };