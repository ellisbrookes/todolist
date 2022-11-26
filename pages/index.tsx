import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ToDoListCenter } from "../components/ToDoListCenter";

export default function Home() {
  return (
    <>
      <Head>
        <title>ProjectX Dashboard - Notification Center</title>
        <meta name="description" content="Dashboard for projectX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToDoListCenter />
    </>
  );
}
