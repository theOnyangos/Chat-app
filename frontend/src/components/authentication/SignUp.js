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
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  // Toast notification
  const toast = useToast();
  // Set the form state
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);

  // History rect hook for redirecting to pages
  const history = useHistory();

  const handleShowPassword = () => setShow(!show);

  const postDetails = (pic) => {
    setLoading(true);
    if (pic === undefined) {
      toast({
        title: "Warning!",
        description: "Please select an image to upload",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    // Check if the selected file is an image
    if (
      pic.type === "image/jpeg" ||
      pic.type === "image/png" ||
      pic.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dirqiywnf");

      fetch("https://api.cloudinary.com/v1_1/dirqiywnf/image/upload", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((response) => {
          setPic(response.url.toString());
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      toast({
        title: "Warning!",
        description: "Permitted image types are .png, .jpeg and .jpg",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
    //
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confPassword) {
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

    if (password !== confPassword) {
      toast({
        title: "Warning!",
        description: "Password provides do not match.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user", // http://localhost:8000
        { name, email, password, pic },
        config
      );
      toast({
        title: "SUccess!",
        description: "Registration was successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      localStorage.setItem("userinfo", JSON.stringify(data));
      setLoading(false);

      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Something went wrong while trying to register new user",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing={"5px"}>
      <FormControl id="name" width={"100%"} isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          size={"lg"}
          placeholder="Enter Your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" width={"100%"} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          size={"lg"}
          placeholder="Enter Your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" width={"100%"} isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            size={"lg"}
            placeholder="Enter Your Password"
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

      <FormControl id="confPassword" width={"100%"} isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            size={"lg"}
            placeholder="Enter Your confirm Password"
            onChange={(e) => setConfPassword(e.target.value)}
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

      <FormControl id="pic" width={"100%"} isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          size={"lg"}
          p={1.5}
          type="file"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        onClick={submitHandler}
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        isLoading={loading}
      >
        {" "}
        Sugn Up
      </Button>
    </VStack>
  );
};

export default SignUp;
