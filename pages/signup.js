// components/SignUp.js
import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = async () => {
    await signIn("google"); // Uses next-auth to initiate Google authentication
  };

  const handleSignUp = async () => {
    // Check if the terms and conditions are accepted
    if (!acceptTerms) {
      console.error("Please accept the terms and conditions.");
      return;
    }

    // Use next-auth to sign up the user
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
      // MongoDB API call for signup
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, acceptTerms }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Signup Successful",
          description: "Your details have been successfully submitted.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Signup Failed",
          description: data.error || "Something went wrong.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      // SignUp failed, handle the error
      console.error("SignUp failed", result.error);
    }
  };

  return (
    <Box
      bgColor="black"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Navbar />
      <Box textAlign="center" width="80vw">
        <Heading
          as="h2"
          size="xl"
          fontWeight={200}
          fontSize="50px"
          mt={20}
          color="white"
          mb={10}
        >
          Sign Up
        </Heading>

        {/* Google Login Button */}
        <Button onClick={handleGoogleLogin} colorScheme="blue" mb={4}>
          Sign Up with Google
        </Button>

        {/* Email Input */}
        <Input
          color="white"
          type="email"
          placeholder="Email"
          mb={4}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Username Input */}
        <Input
          color="white"
          type="text"
          placeholder="Username"
          mb={4}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password Input */}
        <InputGroup mb={4}>
          <Input
            color="white"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            pr="4.5rem"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <FaEyeSlash /> : <FaEye />}
              onClick={handleTogglePassword}
              h="1.75rem"
              size="sm"
              color="white"
              backgroundColor="transparent"
              _hover={{ color: "black", backgroundColor: "white" }}
            />
          </InputRightElement>
        </InputGroup>

        {/* Confirm Password Input */}
        <Input
          color="white"
          type="password"
          placeholder="Confirm Password"
          mb={4}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Terms and Conditions Checkbox */}
        <Checkbox
          colorScheme="teal"
          isChecked={acceptTerms}
          onChange={() => setAcceptTerms(!acceptTerms)}
          mb={4}
          color="grey"
        >
          I accept the terms and conditions
        </Checkbox>

        {/* SignUp Button */}
        <Button onClick={handleSignUp} colorScheme="teal" mb={4}>
          Sign Up
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default SignUp;
