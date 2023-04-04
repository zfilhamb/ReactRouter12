import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { PATH } from "@constants/path";
import { loginUser, registerUser } from "@fetcher/index";
import { delay } from "@utils/index";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();

  const isLoginPage = location.pathname === PATH.login;

  const onSubmit = async (data) => {
    console.log(data.confirmPassword);

    try {
      const res = isLoginPage ? await loginUser(data) : await registerUser(data);
      isLoginPage && window.localStorage.setItem("token", res.token);

      toast({
        title: isLoginPage ? "Login" : "Registered",
        description: isLoginPage
          ? "You have successfully log in"
          : "You have successfully registered. Now, please log in with your account",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      await delay(1500);

      navigate(isLoginPage ? PATH.home : PATH.login);
    } catch (e) {
      toast({
        title: "An error occurred.",
        description: "Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack spacing={3} maxW="500px" textAlign="center">
      <Heading>Welcome to My Bookstore</Heading>
      <Link to={PATH.home}>
        <Text>Back to home</Text>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!isLoginPage && (
          <FormControl isInvalid={errors.name?.message}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is Required" })}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
        )}
        <FormControl isInvalid={errors.email?.message}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors?.password?.message}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        {!isLoginPage && (
          <FormControl isInvalid={errors?.passwordConfirmation?.message}>
            <FormLabel>Password Confirmation</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password confirmation"
              {...register("passwordConfirmation", {
                required: "Confirmation password is required",
              })}
            />
            <FormErrorMessage>{errors?.passwordConfirmation?.message}</FormErrorMessage>
          </FormControl>
        )}
        <Link to={isLoginPage ? PATH.register : PATH.login}>
          <Text>
            {isLoginPage
              ? `Don't have an account ? Click here to register`
              : "Already have an account? Click here to login"}
          </Text>
        </Link>
        <Button type="submit">Submit</Button>
      </form>
    </Stack>
  );
}

export default LoginPage;