"use client";
import {
  Text,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Radio,
  Select,
} from "@chakra-ui/react";

function SignInForm() {
  return (
    <FormControl>
      <FormLabel>상명대 이메일</FormLabel>
      <Input type="email" placeholder="상명대 이메일을 입력해주세요." />
      <FormLabel>비밀번호</FormLabel>
      <Input type="password" placeholder="비밀번호를 입력해주세요." />
      <Button
        className="w-[100%]"
        mt={4}
        colorScheme="teal"
        type="submit"
        variant="solid"
      >
        로그인하기
      </Button>
    </FormControl>
  );
}

export default SignInForm;
