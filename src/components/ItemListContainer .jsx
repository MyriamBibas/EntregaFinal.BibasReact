import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    
    const productosRef = collection(db, "productos");
    getDocs(productosRef)
    .then ((resp) => {

      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
            })
          )
        })
   
     
  }, [categoria])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer;

