// components/Layout.js
import Head from "next/head";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Importación de la fuente global */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}