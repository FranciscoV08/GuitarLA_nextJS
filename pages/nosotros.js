import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../styles/nosotros.module.css"
import Link from "next/link"


// RFC - no RAFC

  export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, GuitarLA tienda de musica "
    >
       
      <main className="contenedor">
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>
            
            <Image src={'/img/nosotros.jpg'} alt={'Imagen nosotros'} width={1000} height={800}/>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam sapien erat, commodo condimentum orci fringilla ut. Phasellus sit amet rhoncus tellus. Ut eget consectetur erat. Praesent sollicitudin lobortis semper. Morbi vitae lacus risus. 
              </p>
              <p>
                Sed molestie sem sed volutpat aliquet. Nunc ornare consectetur arcu, non laoreet turpis dapibus eget. Phasellus eu dignissim ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ligula odio, congue in eros quis, blandit dignissim dolor. Aliquam pharetra vulputate lacus et ultrices. Morbi consequat sem non mauris posuere rutrum. Nullam condimentum lorem eget magna pretium, quis interdum dolor dictum. Proin pellentesque, nulla a faucibus porta, ex lorem tempor ante, 
              </p>
            </div>
          </div>
      </main>
      
    </Layout>
  )
}

