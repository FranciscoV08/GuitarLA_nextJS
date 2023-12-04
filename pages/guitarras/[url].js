import Image from "next/image";
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"
import { useState } from "react";

export default function Producto({guitarra, agregarCarrito, }) {
    const [cantidad, setCantidad] = useState(0)
    const {nombre, precio, imagen, description} = guitarra[0].attributes;

    console.log()


    const handleSubmit = ( e ) => {
        e.preventDefault()
        
        if(cantidad < 1){
            alert('Cantidad no valida');
            return
        }
        // construir un objeto
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        // Pasando la informacion al context

        agregarCarrito(guitarraSeleccionada)
    }


  return (
    <Layout
        title={`Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`}/>

            <div className={styles.contenido}>

                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{description}</p>
                <p className={styles.precio}>{precio}</p>

                <form 
                    onSubmit={handleSubmit}
                    className={styles.formulario}
                    >
                    <label htmlFor="cantidad"> Cantidad: </label>

                    <select  
                        onChange={ e => setCantidad( +e.target.value) }
                        id="cantidad"> 
                        <option value="0">--Selecciones--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input 
                        type="submit" 
                        value="Agregar al carrito"

                    />
                </form>
            </div>
        </div>
    </Layout>
  )
}


export async function getStaticPaths ( ){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
    const {data} = await respuesta.json()
    console.log(data)

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))
    console.log(paths)

    return{
        paths, 
        fallback: false
    }
}

// getStaticProps
export async function getStaticProps ({params: {url}}) {
    // console.log(url)

    const respuestas = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuestas.json()
    // console.log(guitarra)
    return{
        props: {
            guitarra
        }
    }
}


// // ServerSideProps
// export async function getServerSideProps ({query: {url}}) {
//     // console.log(url)

//     const respuestas = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data: guitarra} = await respuestas.json()
//     // console.log(guitarra)
//     return{
//         props: {
//             guitarra
//         }
//     }
// }