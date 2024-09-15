import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import ContainerCards from "./Components/ContainerCards";
import Paginacion from "./Components/Paginacion";

const urlApi = 'https://rickandmortyapi.com/api/character';

// fetch(urlApi)
//   .then(res => {
//     // console.log(res)
//     if(!res.ok){
//       throw new Error('Mensaje de error: ' + res.status);
//     }else{
//       return res.json();
//     }
//     })
//   .then(data => console.log(data.results))
//   .catch(err => console.log(err));

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});

  // Llamar a la api 
  const fetchPersonajes = async () => {
    try {
      // Realizar el fetch
      const res = await fetch(urlApi);
      // Mensaje de error si REspuesta != 200
      if(!res.ok){
        throw new Error('Mensaje de error: ' + res.status);
      }
      // obtener datos de la api
      const data = await res.json();

      // Cargar el resultado en el hook useState()
      setPersonajes(data.results);
      setInfo(data.info)
      console.log(data.results)
      console.log(data.info)
      // return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  //pagina siguiente 
  const onNext = () => {
    console.log(info.next);
  }
  
  // pagina anterior
  const onPrev = () => {
    console.log(info.prev)
  }

  // Llamar a la funcion asíncrona al renderizar la pagina
  useEffect( () => {
    fetchPersonajes();
  }, []);

  const title = 'Rick & Morty';

  return (
    <>
      <Header title={title}/>
      <Paginacion />
      <ContainerCards personajes={personajes} />
      
      {/* {personajes.map( item => (
          <h2 key={item.id}>{item.name}</h2>
        ))} */}
    </>
  )
}

export default App;
