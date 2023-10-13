import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { pedirDatos } from "../helpers/pedirDatos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
   
       
      });
  } , [categoria])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;

