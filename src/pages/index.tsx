import Head from "next/head";
import { ReactElement } from "react";
import { SearchInput } from "@/components/home";
import { Layout } from "@/layouts";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import TileContainer from "@/components/home/TileContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>코테노트</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="40px"
        margin="0 auto"
        padding="var(--mobile-gap)"
      >
        <Image
          style={{ paddingTop: "28vh" }}
          className="main_logo"
          src="/assets/images/logo.svg"
          width={300}
          height={39}
          alt="logo"
          priority
        />
        <SearchInput />
        <TileContainer />
      </Flex>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
