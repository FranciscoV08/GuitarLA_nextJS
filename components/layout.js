
import Head from "next/head"
import Footer from "./footer"
import Header from "./header"


export default function Layout({children, title='', description='' }) {

  return (
    <>
    {/* Como lo veo es como que cada page tiene su estructura HTML que toda tiene cierre */}
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description}/>
      </Head>

    {/* Componentes */}

      <Header />

       {children}

      <Footer />
    </>
  )
}
