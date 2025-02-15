import { useState } from "react";

export function InputBox({ title, placeholder, onChange }) {
  const [input, setInput] = useState("");
  return (
    <div className="">
      <div className="font-semibold text-left py-2">{title}</div>
      <div>
        <input
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-2 py-1 border text-md font-semibold rounded-sm border-slate-300 border-solid"
        />
      </div>
    </div>
  );
}
