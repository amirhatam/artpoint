import { GetStaticProps } from "next";
import Main from './components/Main'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <>
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