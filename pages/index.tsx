import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ToDoListCenter } from "../components/ToDoListCenter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic TO-DO List</title>
        <meta name="description" content="Basic to do list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToDoListCenter />
    </>
  );
}
