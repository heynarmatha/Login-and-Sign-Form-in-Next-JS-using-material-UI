import Head from "next/head";
import * as React from "react";
import From from "../src/components/from";

export default function Home() {

  return (
    <div>
     
      <Head>
        <title>Form </title>
        <meta name="description" content="User CRUD app" />
      </Head>

      <main>
      <From/>

      </main>

      <footer>
        
      </footer>
    </div>
  );
}
