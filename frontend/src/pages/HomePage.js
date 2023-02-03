import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import SignUp from "../components/authentication/SignUp";

function HomePage() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        alignContent={"center"}
        p={"20px 50px"}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize={"4xl"} fontFamily="Work sans" color={"black"}>
          Live-Chat-Application
        </Text>
      </Box>
      <Box bg="white" w="100%" borderRadius="lg" borderWidth="1px" p={"10px"}>
        <Tabs variant="soft-rounded" colorScheme={"green"}>
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login </Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
