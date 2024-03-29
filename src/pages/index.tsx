import Head from "next/head";
import App from "@/components/App";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Recognition</title>
        <meta name="description" content="AI-Assisted Image Recognition" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <App />
    </>
  );
}
