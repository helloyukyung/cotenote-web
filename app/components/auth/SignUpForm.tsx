"use client";

import {
  Input,
  Button,
  Select,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import FormItem from "../common/FormItem";
import Form from "../common/Form";
import { useForm } from "react-hook-form";

function SignUpForm() {
  const form = useForm<any>();

  const handleSubmit = (values: any) => {
    console.log("hi", values);
  };

  return (
    <Form form={form} handleSubmit={handleSubmit}>
      <FormItem name="email" label="상명대 이메일">
        <InputGroup>
          <Input
            pr="115px"
            type="email"
            placeholder="상명대 이메일을 입력해주세요."
          />
          <InputRightElement width="115px">
            <Button
              className="bg-[#EDF2F7]"
              h="1.75rem"
              size="sm"
              onClick={() => {}}
            >
              인증번호 받기
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormItem>
      <FormItem name="이멜인증번호" label="이메일 인증번호">
        <InputGroup>
          <Input
            pr="88px"
            type="email"
            placeholder="이메일 인증번호를 입력해주세요."
          />
          <InputRightElement width="88px">
            <Button
              className="bg-[#EDF2F7]"
              h="1.75rem"
              size="sm"
              onClick={() => {}}
            >
              인증하기
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormItem>
      <FormItem name="password" label="비밀번호">
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
      </FormItem>
      <FormItem name="passwordCheck" label="비밀번호 확인">
        <Input
          type="password"
          placeholder="비밀번호를 다시한번 입력해주세요."
        />
      </FormItem>
      <FormItem name="gender" label="성별">
        <Select color="#718096" placeholder="성별을 선택해주세요.">
          <option value="male">남자</option>
          <option value="female">여자</option>
        </Select>
      </FormItem>
      <FormItem name="kakaoTalkId" label="카카오톡 ID">
        <Input placeholder="카카오톡 ID를 입력해주세요." />
      </FormItem>
      <Button className="button-contained w-[100%]" mt={4} type="submit">
        가입하고 시그널 보내러가기
      </Button>
    </Form>
  );
}

export default SignUpForm;
