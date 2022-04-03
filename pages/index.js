import Head from "next/head";
import * as React from "react";
import RegisterFrom from "../src/components/registerFrom";

export default function Home() {

  return (
    <div>
     
      <Head>
        <title>Form </title>
        <meta name="description" content="User CRUD app" />
      </Head>

      <main>
      <RegisterFrom>

      </RegisterFrom>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}
