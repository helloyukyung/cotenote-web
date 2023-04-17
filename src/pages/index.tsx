import Head from "next/head";
import { ReactElement } from "react";

import { MainLayout } from "@/layouts";
import { Flex } from "@chakra-ui/react";
import TileContainer from "@/components/home/TileContainer";
import { Logo, SearchInput } from "@/components/common";

export default function Home() {
  return (
    <>
      <Head>
        <title>코테노트 - 코딩테스트 준비 끝!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="40px"
        margin="auto"
        padding="20vh var(--mobile-gap) 0"
      >
        <Logo width={300} height={39.58} />
        <SearchInput />
        <TileContainer />
      </Flex>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
