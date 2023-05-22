"use client";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      메인 페이지
      <ButtonGroup>
        <Link href={"/auth/sign-in"}>
          <Button>로그인하기</Button>
        </Link>
        <Link href={"/auth/sign-up"}>
          <Button>회원가입하기</Button>
        </Link>
      </ButtonGroup>
    </main>
  );
}
