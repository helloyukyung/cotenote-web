"use client";
import SignInForm from "@/app/components/auth/SignInForm";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <main className="max-w-[400px] m-auto mt-[20px] px-[15px]">
      <SignInForm />
      <Link href={"/auth/sign-up"}>
        <Button className="w-[100%]" mt={4}>
          회원가입하기
        </Button>
      </Link>
    </main>
  );
}

export default SignInPage;
