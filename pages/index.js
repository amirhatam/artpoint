import { GetStaticProps } from "next";
import Main from './components/Main'
import Header from "./components/Header";

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <>
      <Header data={props.data} />
      <Main data={props.data} />
    </>
  )
}

export const getStaticProps = GetStaticProps = async () => {
  const data = (await import("../data.json")).default;
  return {
    props: { data }
  };
}