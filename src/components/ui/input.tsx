"use client";
import type { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  placeholder: string;
  value?: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
  password?: boolean;
  filled?: boolean;
  icon?: IconDefinition;
};

export const Input = ({
  placeholder,
  value,
  onChange,
  onEnter,
  password,
  filled,
  icon,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyup = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <div
      className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-zinc-800 ${
        filled && "bg-zinc-700"
      }`}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className="size-5 text-zinc-500 px-4" />
      )}
      <input
        type={password && !showPassword ? "password" : "text"}
        className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyUp={handleKeyup}
      />
      {password && (
        <FontAwesomeIcon
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          icon={showPassword ? faEye : faEyeSlash}
          className="size-6 text-zinc-500 px-4 cursor-pointer"
        />
      )}
    </div>
  );
};
