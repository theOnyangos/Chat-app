import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShowPassword = () => setShow(!show);
  const toast = useToast();
  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Warning!",
        description: "Please fill in all required fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    // Make a request to the server
    try {
      const config = {
        Headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login", // http://localhost:8000
        { email, password },
        config
      );

      if (data) {
        localStorage.setItem("userinfo", JSON.stringify(data));

        toast({
          title: "success!",
          description: "Login successful wlcome back " + data.name,
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setLoading(false);

        history.push("/chats");
      }
    } catch (error) {
      toast({
        title: "Error Occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
  };

  const getUserCredentials = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl id="email_login" width={"100%"} isRequired>
        <FormLabel>Username or Email</FormLabel>
        <Input
          size={"lg"}
          value={email}
          placeholder="Enter Your username or email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="confPassword_login" width={"100%"} isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            size={"lg"}
            value={password}
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
        isLoading={loading}
      >
        {" "}
        Login
      </Button>

      <Button
        colorScheme="red"
        width={"100%"}
        style={{ marginTop: 5 }}
        onClick={() => {
          setEmail("otienodennis29@gmail.com");
          setPassword("Welcome2day");
        }}
      >
        {" "}
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
