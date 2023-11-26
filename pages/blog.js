import Layout from "@/components/layout"
import Post from "@/components/post";
import Link from "next/link"
import styles from "../styles/grid.module.css"



// RFC - no RAFC

  export default function Blog({posts}) {
    
  return (
    <Layout
      title="Blog"
      description="Blog de música, venta de guitarras, consejos, GuitarLA "
    >
       
    <main className="contenedor">
      <h1 className="heading">Blog</h1>
      <div className={styles.grid}>
        {/* El operador ?. es el operador de encadenamiento opcional de JavaScript.  */}
        {posts?.map(post => (
          <Post 
            key={post.id}
            post={post.attributes}
          />
        ))} 
      </div>

    </main>
      
    </Layout>
  )
}

export async function getStaticProps(){
//   // Realizamos el fetch 
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  // Extraemos data y le cambiamos el nombre a Guitarras
  // const respuesta = await fetch('http://localhost:1337/api/guitarras?populate=imagen');
  const {data: posts} = await respuesta.json()

  console.log(posts)

  return{
    props:{
      posts
    }
  }
}