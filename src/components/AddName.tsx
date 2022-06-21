import { useForm } from "../hooks/useForm";

export const AddName = ({ onSubmit }: { onSubmit: Function }) => {
  const [form, handleChange, setForm] = useForm({ name: "" });

  const submit = async (ev: React.FormEvent<EventTarget>) => {
    ev.preventDefault();
    onSubmit(form.name);
    setForm({ name: "" });
  };

  return (
    <form className="form" onSubmit={submit}>
      <input className="form__input" type="text" autoFocus onChange={handleChange} value={form.name} name="name" placeholder="Enter Name" />
      <button className="form__button">save</button>
    </form>
  );
};
