import React from "react";

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Toggle = ({ label, checked, onChange }: ToggleProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 px-4 h-full bg-white border ${
        checked ? "border-myred" : "border-e1"
      }  w-full`}
    >
      <span
        className={`text-sm text-nowrap ${
          checked ? "text-myred" : "text-textcolor1"
        }  font-bold`}
      >
        {label}
      </span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex w-[36px] py-[2px] px-[2px] bg-transparent items-center rounded-full transition-colors border-2 ${
          checked ? "border-myred" : "border-textcolor1"
        }`}
      >
        <span
          className={`inline-block h-3 w-3 transform rounded-full my-auto transition-transform ${
            checked ? "translate-x-4 bg-myred" : "translate-x-0 bg-textcolor1"
          }`}
        />
      </button>
    </div>
  );
};
