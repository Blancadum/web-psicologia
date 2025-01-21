// components/Layout.js
import Head from "next/head";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Mi Sitio Web</title>
        <meta name="description" content="Descripción de mi sitio web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
