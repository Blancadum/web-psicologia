// pages/blog/index.js
import Head from "next/head";
import Layout from "@/components/layout";
import PostCard from "@/components/blog/Postcard";

export default function Blog() {
  // Ejemplo de datos de posts (podrías venir de una API real)
  const posts = [
    {
      id: 1,
      title: "¿Por qué no vamos al psicólogo hasta que estamos muy mal?",
      date: "15/01/2025",
      excerpt: "Hasta cuándo aguantar el sufrimiento"
    },
    {
      id: 2,
      title: "5 señales de depresión que no debes ignorar",
      date: "02/01/2025",
      excerpt: "Reconocer a tiempo los síntomas de la depresión puede marcar la diferencia..."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Blog | Psicología Online</title>
        <meta
          name="description"
          content="Lee artículos y consejos para tu bienestar emocional, terapias para la ansiedad y depresión, y más temas de psicología."
        />
      </Head>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1>
          Blog de Psicología y Bienestar
        </h1>
        <div className="grid gap-4 md:grid-cols-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
