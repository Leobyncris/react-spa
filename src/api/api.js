import axios from "axios";
import { Await } from "react-router-dom";

export   const api = axios.create( {
  baseURL: "http://localhost:5000"
} )


export const buscar = async (url, setData) => {
  const respuesta = await api.get(url)
  setData(respuesta.data)
}

