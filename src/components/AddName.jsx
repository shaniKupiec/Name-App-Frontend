import { useForm } from "../hooks/useForm";

export const AddName = () => {
  const [form, handleChange, setForm] = useForm({ name: "" });

  const onSubmit = async (ev) => {
    ev.preventDefault();
    console.log("form", form);
    setForm({ name: "" });
  };

  return (
    <section className="">
      <form onSubmit={onSubmit}>
        <input type="text" autoFocus onChange={handleChange} value={form.name} name="name" placeholder="Enter Name" />
        <button className="edit__form__submit">save</button>
      </form>
    </section>
  );
};
