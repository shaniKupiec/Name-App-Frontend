import { useForm } from "../hooks/useForm";

export const AddName = ({ onSubmit }: { onSubmit: any }) => {
  const [form, handleChange, setForm] = useForm({ name: "" });

  const submit = async (ev: any) => {
    ev.preventDefault();
    // console.log("form", form);
    onSubmit(form.name)
    setForm({ name: "" });
  };

  return (
    <section className="">
      <form onSubmit={submit}>
        <input type="text" autoFocus onChange={handleChange} value={form.name} name="name" placeholder="Enter Name" />
        <button className="edit__form__submit">save</button>
      </form>
    </section>
  );
};
