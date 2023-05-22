import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import React from "react";
import { useController } from "react-hook-form";
import { UseControllerProps } from "react-hook-form/dist/types";

interface FormItemProps {
  label: string;
  name: string;
  helperText?: string;
  rules?: UseControllerProps["rules"];
}

function FormItem({
  helperText,
  label,
  name,
  children,
  rules,
}: React.PropsWithChildren<FormItemProps>) {
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    rules,
  });

  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      {children &&
        React.cloneElement(children as React.ReactElement, { ...field })}
      <FormHelperText>{helperText && helperText}</FormHelperText>
    </FormControl>
  );
}

export default FormItem;
