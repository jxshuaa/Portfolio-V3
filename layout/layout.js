import Head from 'next/head';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({
  children,
  title = '',
                               }) {
  title = `${title && `${title} —`} Joshua L.`
  return (
      <>
          <Head>
              <meta charSet="UTF-8"/>
              <title>{title}</title>
              <meta name="description" content="A junior developer and tech boy from Germany." />
              <meta name="keywords" content="HTML, CSS, JavaScript, Python, Flask, React, Next" />
              <meta name="author" content="Joshua L." />
              <link rel="icon" href="/favicon.ico" />
              <meta property="og:title" content={`Joshua L.`} />
              <meta property="og:description" content="A developer and tech boy from Germany." />
              <meta name="theme-color" content="#F43F5E" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@jxshyyhere" />
              <meta name="twitter:title" content={`Joshua L.${title && ` - ${title}`}`} />
              <meta name="twitter:description" content="A developer and tech boy from Germany."/>
          </Head>
          <div className="flex flex-col min-h-screen">
              <Navbar />
              {children}
              <Footer />
          </div>
      </>
  )
}