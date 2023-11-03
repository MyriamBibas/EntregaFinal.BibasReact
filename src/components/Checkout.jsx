import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm(); // Añade "formState: { errors }" para desestructurar la variable errors.

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            });
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresá nombre" {...register("nombre", { required: true })} />
                {errors.nombre && <p>Este campo es obligatorio</p>}

                <input type="email" placeholder="Ingresá e-mail" {...register("email", { required: true })} />
                {errors.email && <p>Este campo es obligatorio</p>}

                <input type="tel" placeholder="Ingresá teléfono" {...register("telefono", { required: true })} />
                {errors.telefono && <p>Este campo es obligatorio</p>}

                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout;
