import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { pedirDatos } from "../helpers/pedirDatos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;

