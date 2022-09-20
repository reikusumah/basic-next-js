import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image
          src="/img1.jpg"
          width={640}
          height={420}
          layout="fixed"
          alt="image"
        />
        <h1 className={styles["title-homepage"]}>Welcome Fachreiza</h1>
      </Layout>
    </>
  );
};

export default Home;
