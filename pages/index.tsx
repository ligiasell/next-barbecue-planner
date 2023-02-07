import Head from "next/head";

import Login from "../components/login";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-between">
      <Head>
        <title>Agenda de Churrasco</title>
        <meta name="description" content="Agenda de Churrasco App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex justify-center bg-primary">
        <Login />
      </main>
    </div>
  );
}
