import React, { useState, useContext } from "react";
import loader from "../assests/loader.gif";
import {
  Box,
  Center,
  Flex,
  Input,
  Button,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Select,
} from "@chakra-ui/react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import { FaGoogle } from "react-icons/fa";
import { addUserToFirestore } from "../userFirestore";
import { UserContext } from "../App";
import "../App.css";

const Signup = () => {
  const localAuth = getAuth();
  const user = useContext(UserContext);
  console.log(user);
  const [isLoading, setIsLoading] = useState(false);
  const [signupMessage, setSignupMessage] = useState("");
  const [formData, setFormData] = useState({
    signupName: "",
    signupEmail: "",
    signupPassword: "",
  });
  const [selected, setSelected] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGoogleSignup = async (e) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result?.user;
        addUserToFirestore(user, selected);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };
  const handleSelectChange = (event) => {
    const select = event.target.value === "option1" ? "Employer" : "Employee";
    setSelected(select);
  };
  console.log(selected);
  return (
    <>
      {!auth?.currentUser ? (
        <Box
          bgImage={"/hand.jpg"}
          bgSize="cover"
          bgPosition="center"
          h="90vh"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Center
            h="100%"
            style={{
              flex: 1,
              background:
                "linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%)",
              borderEndEndRadius: "250px",
            }}
          >
            <Flex
              direction="column"
              bg="white"
              p="8"
              rounded="xl"
              shadow="lg"
              maxW="400px"
              w="100%"
              style={{
                // opacity: "0.9",
                fontSize: "0.7rem",
              }}
            >
              <VStack spacing="4">
                <FormControl id="signupName" isRequired>
                  <FormLabel
                    style={{ fontSize: "0.75rem", marginTop: "-0.5rem" }}
                  >
                    Full Name{" "}
                  </FormLabel>
                  <Input
                    type="text"
                    name="signupName"
                    value={formData.signupName}
                    onChange={handleInputChange}
                    placeholder="Eg. Shreyans Jain"
                    fontSize="0.75rem"
                  />
                </FormControl>
                <FormControl id="signupEmail" isRequired pb={2}>
                  <FormLabel
                    style={{ fontSize: "0.75rem", marginTop: "-0.5rem" }}
                  >
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    name="signupEmail"
                    value={formData.signupEmail}
                    onChange={handleInputChange}
                    bg={"white"}
                    placeholder="Eg. shreyans@gmail.com"
                    fontSize="0.75rem"
                  />
                </FormControl>
                <FormControl id="signupPassword" isRequired>
                  <FormLabel
                    style={{ fontSize: "0.75rem", marginTop: "-0.95rem" }}
                  >
                    Password
                  </FormLabel>
                  <Input
                    type="password"
                    name="signupPassword"
                    value={formData.signupPassword}
                    onChange={handleInputChange}
                    bg={"white"}
                    placeholder="Min. 8 characters"
                    fontSize="0.75rem"
                  />
                </FormControl>
                <FormControl id="signupPassword" isRequired>
                  <FormLabel
                    style={{ fontSize: "0.75rem", marginTop: "-0.7rem" }}
                  >
                    Role
                  </FormLabel>
                  <Select
                    placeholder="Select Option"
                    style={{ backgroundColor: "white", fontSize: "0.7rem" }}
                    onChange={handleSelectChange}
                    value={selected}
                  >
                    <option value="option1">Employer</option>
                    <option value="option2">Employee</option>
                  </Select>
                </FormControl>
                <Button
                  bgColor="#3261ff"
                  color="white"
                  type="submit"
                  isLoading={isLoading}
                  width={"full"}
                  style={{
                    fontSize: "0.7rem",
                    height: "fit-content",
                    padding: "0.5rem",
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  onClick={handleGoogleSignup}
                  bgColor={"black"}
                  _hover={{ bgColor: "gray.800" }}
                  color={"white"}
                  leftIcon={<FaGoogle />}
                  width={"full"}
                  style={{
                    fontSize: "0.7rem",
                    height: "fit-content",
                    padding: "0.5rem",
                    marginTop: "-0.4rem",
                  }}
                >
                  Sign Up with Google
                </Button>
              </VStack>
              {signupMessage && (
                <Alert
                  status={
                    signupMessage.includes("successful") ? "success" : "error"
                  }
                  mt="4"
                >
                  <AlertIcon />
                  <AlertTitle mr={2}>
                    {signupMessage.includes("successful")
                      ? "Success!"
                      : "Error!"}
                  </AlertTitle>
                  <AlertDescription>{signupMessage}</AlertDescription>
                  <CloseButton
                    onClick={() => setSignupMessage("")}
                    position="absolute"
                    right="8px"
                    top="8px"
                  />
                </Alert>
              )}
            </Flex>
          </Center>
          <div className="left" style={{ flex: 0.6 }}>
            <h1
              style={{
                color: "#e38a43",
                fontSize: "5.5rem",
                fontWeight: "bolder",
              }}
            >
              सह<span style={{ color: "#3261ff" }}>AI</span>ता
            </h1>
            <img
              src={loader}
              alt=""
              style={{ height: "350px", width: "450px", marginTop: "10px" }}
            />
          </div>
          {/* <div
            style={{
              background: "linear-gradient(to bottom, blue, violet)",
              minHeight: "100vh",
              flex: 1,
              borderBottomLeftRadius: "15rem",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://imgs.search.brave.com/t6T_K2jQCMbz8q1W29jsrOec1J2QhnonZUv2ACDUAls/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/bWFzdGVyLmFpL2hz/LWZzL2h1YmZzL3do/aXRlLWxvZ28tY29j/YS1jb2xhLmpwZz93/aWR0aD0xNzAwJmhl/aWdodD0xMTQ4Jm5h/bWU9d2hpdGUtbG9n/by1jb2NhLWNvbGEu/anBn"
              alt=""
              style={{ width: "20rem" }}
            />
            <div style={{ fontSize: "3rem", fontWeight: 500 }}>Sahitya</div>
          </div> */}
        </Box>
      ) : (
        <div
          style={{
            backgroundColor: "#f3f4f6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            minHeight: "90vh",
            fontSize: "1.6rem",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              padding: "4rem",
              borderRadius: "3rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Are you sure, you want to logout?
            <div
              style={{
                paddingTop: "3rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <button
                // onClick={() => {
                //   localAuth.signOut();
                //   console.log("pressed");
                // }}
                style={{
                  fontWeight: 555,
                  backgroundColor: "lightgray",
                  paddingTop: "0.3rem",
                  paddingBottom: "0.3rem",
                  paddingLeft: "1.6rem",
                  paddingRight: "1.6rem",
                  borderRadius: "4rem",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  localAuth.signOut();
                  console.log("pressed");
                }}
                style={{
                  fontWeight: 555,
                  backgroundColor: "#2234da",
                  paddingTop: "0.3rem",
                  paddingBottom: "0.3rem",
                  paddingLeft: "1.6rem",
                  paddingRight: "1.6rem",
                  borderRadius: "4rem",
                  color: "white",
                }}
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
