import { useState } from "react";
import { useEffectUpdate } from "./useEffectUpdate";

export const useForm = (initialState: any, cb = (x: any) => {}) => {
  const [fields, setFields] = useState(initialState);

  useEffectUpdate(() => {
    cb(fields);
  }, [fields]);

  const handleChange = ({ target }: { target: any }) => {
    const field = target.name;
    let value: any;
    if (target.type === "number") value = +target.value || "";
    else if (target.type === "checkbox") value = +target.value ? 0 : Date.now();
    else value = target.value;
    setFields((prevFields: any) => ({ ...prevFields, [field]: value }));
  };

  return [fields, handleChange, setFields];
};
