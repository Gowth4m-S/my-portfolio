import Head from 'next/head'
import Header from '../Header'
import Footer from '../footer'



const Main = ({ children, className }) => {
  return (
    <main>
      <Head>
        <meta name='viewport' content="width=device-width,initial-scale=1" />
        <meta name='description' content="Gowtham's homepage" />
        <meta name='author' content="Gowtham Saravanan" />
        <meta name='author' content="Dark Rager" />
        <link rel='icon' href='/favicon.ico' />
        <title>Gowtham Saravanan - Homepage</title>
      </Head>
      <Header />
      <div className={`bg-light text-dark dark:bg-dark dark:text-white ${className}`}>
        {children}
        <Footer />
      </div>
    </main>
  )
}


export default Main
