import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Añadí "formState: { errors }" para desestructurar la variable errors.

  const enviar = (data) => {
    console.log(data);
  }

  return (
    <div className="container">
      <h1 className="main-title">Contactanos</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre", { required: true })} />
        {errors.nombre && <p> Este campo es obligatorio</p>}

        <input type="email" placeholder="Ingresá tu e-mail" {...register("email", { required: true })} />
        {errors.email && <p>Este campo es obligatorio</p>}

        <input type="tel" placeholder="Ingresá tu teléfono" {...register("telefono", { required: true })} />
        {errors.telefono && <p>Este campo es obligatorio</p>}

        <button className="enviar" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
