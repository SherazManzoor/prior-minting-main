import Head from "next/head";
import Layout from "../Components/Layout/Layout";
import MintHero from "../Components/MintHero";
// import Layout from "../components/Layout/Layout";
// import MintHero from "../Components/MintHero";

const Mint = () => {
  return (
    <Layout>
      <Head>
        <title>Mint | QUIT BITCHING COALITION</title>
      </Head>

      <MintHero />
    </Layout>
  );
};

export default Mint;
