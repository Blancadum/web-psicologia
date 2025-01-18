// pages/videos.js
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import VideoGrid from "@/components/Video/VideoGrid";

export default function VideosPage() {
  const videos = [
    { url: "https://www.youtube.com/embed/VIDEO_ID_1", title: "Video de Psicología 1" },
    { url: "https://www.youtube.com/embed/VIDEO_ID_2", title: "Video de Psicología 2" },
    { url: "https://www.youtube.com/embed/VIDEO_ID_3", title: "Video de Psicología 3" },
    { url: "https://www.youtube.com/embed/VIDEO_ID_4", title: "Video de Psicología 4" },
  ];

  return (
    <Layout>
      <Head>
        <title>Videos de Apoyo y Consejos | Psicología Online</title>
        <meta
          name="description"
          content="Descubre videos con consejos, estrategias y reflexiones para superar la ansiedad, la depresión y otros problemas emocionales."
        />
      </Head>
      <section className="max-w-5xl mx-auto px-4 py-8">
      <h1>Videos</h1>
      <VideoGrid videos={videos} />
      </section>
    </Layout>
  );
}
