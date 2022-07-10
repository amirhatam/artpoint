import Main from './components/Main'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home(props) {
  return (
    <>
      <Header data={props.data} />
      <Main data={props.data} />
      <Footer />
    </>
  )
}

// export const getStaticProps = GetStaticProps = async () => {
export async function getStaticProps() {
  const data = (await import("../data.json")).default;
  return {
    props: { data }
  };
}