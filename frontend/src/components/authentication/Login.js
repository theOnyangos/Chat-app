import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [name, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleShowPassword = () => setShow(!show);

  const submitHandler = () => {};
  const getUserCredentials = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl id="name" width={"100%"} isRequired>
        <FormLabel>Username or Email</FormLabel>
        <Input
          size={"lg"}
          placeholder="Enter Your username or email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="confPassword" width={"100%"} isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            size={"lg"}
            placeholder="Enter Your confirm Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              h={"1.7rem"}
              mr="20px"
              size="sm"
              onClick={handleShowPassword}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        onClick={submitHandler}
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
      >
        {" "}
        Login
      </Button>

      <Button
        colorScheme="red"
        width={"100%"}
        style={{ marginTop: 5 }}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        {" "}
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
