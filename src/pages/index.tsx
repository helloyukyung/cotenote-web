import Container from "@/components/common/Container";
import BaseTextField from "@/components/common/input/BaseTextField";
import SearchInput from "@/components/home/SearchInput";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>코테노트</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <SearchInput />
      </Container>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
