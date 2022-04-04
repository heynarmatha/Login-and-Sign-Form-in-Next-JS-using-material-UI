import Head from "next/head";
import * as React from "react";
import RegisterForm from "../src/components/registerForm";
import SideBar from "../src/components/sideBar";
import Link from "next/link";
export default function Home() {

  return (
    <div>
     
      <Head>
        <title>Form </title>
        <meta name="description" content="User CRUD app" />
      </Head>

      <main>
      <SideBar>
        <RegisterForm/>
      </SideBar>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}
