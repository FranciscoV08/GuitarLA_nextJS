import Image from "next/image";
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"

export default function Producto({guitarra}) {

    const {nombre, precio, imagen, description} = guitarra[0].attributes;
    console.log(guitarra[0].attributes)

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