import Guitarra from "@/components/guitarra";
import Layout from "@/components/layout"
import Post from "@/components/post";
import Curso from "../components/curso";
import styles from "../styles/grid.module.css"
// El componente que esta optimizado para el ROUTING


export default function Home({guitarras, posts, cursos}) {



  return (

    <>
      <Layout
        title={'Inicio'}
        description={'Blog de musica, venta de guitarras y más'} 
        >
          <main className="contenedor">
            <h1 className="heading">Nuestra Coleccion </h1>
            <div className={styles.grid}>
              {guitarras?.map(guitarra => (
                <Guitarra 
                  key={guitarra.id}
                  guitarra={guitarra.attributes}
                />
              ))}
            </div>            
          </main>

          <Curso 
            cursos={cursos.attributes}
          />

          <section className="contenedor">
            <h2 className="heading">Blog</h2>
            <div className={styles.grid}>
              {/* El operador ?. es el operador de encadenamiento opcional de JavaScript.  */}
              {posts?.map(post => (
                <Post
                  key={post.id}
                  post={post.attributes}
                />
              ))} 
            </div>

          </section>
      </Layout>      
    
    </>
  )
}


// ESTO SE EJECUTA EN LA CONSOLA NO EN LA DEL NAVEGADOR
export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;


  // Multiples Peticiones HTTP
  const [ resGuitarras, resPosts, resCurso ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])
  // Multiples formato JSON en este caso los 2 de antes 
  const [ {data: guitarras}, {data: posts}, {data: cursos}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])


  return{
    props: {
      guitarras,
      posts,
      cursos
    }
  }
}