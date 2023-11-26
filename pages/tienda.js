import Layout from "@/components/layout"
import Link from "next/link"
import Guitarra from "@/components/guitarra";

import styles from "../styles/grid.module.css"

// RFC - no RAFC

export default function Tienda( {guitarras}) {

    console.log(guitarras)

  return (
    <Layout
      title={`Tienda Virtual `}
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA ">
       <main className="contenedor">
          <h2 className="heading"> Nuestra Coleccion </h2>

          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra 
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))}
          </div>


       </main>
      
      
    </Layout>
  )
}

// TENER EN CUENTA QUE PRIMERO SE EJECUTA ESTA PARTE DEL SERVIDOR POR ESO SE PASA VIA PROPS Y LO OBTENEMOS 

// Informacion que no se regenera con cada visita del usuario 
// Toma los cambios mediante los build

// export async function getStaticProps(){
//   // Realizamos el fetch 
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   // Extraemos data y le cambiamos el nombre a Guitarras
//   // const respuesta = await fetch('http://localhost:1337/api/guitarras?populate=imagen');
//   const {data: guitarras} = await respuesta.json()

//   console.log(guitarras)

//   return{
//     props:{
//       guitarras
//     }
//   }
// }

// Ventajas de usar este es: No es necesario hacer otro biuld para actualizar la info 

// export async function getServerSideProps(){

//   // Realizamos el fetch 
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   // Extraemos data y le cambiamos el nombre a Guitarras
//   // const respuesta = await fetch('http://localhost:1337/api/guitarras?populate=imagen');
//   const {data: guitarras} = await respuesta.json()

//   console.log(guitarras)

//   return{
//     props:{
//       guitarras
//     }
//   }
// }