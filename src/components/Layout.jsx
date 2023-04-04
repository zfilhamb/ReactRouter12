import {
    Container,
    SimpleGrid,
    Flex,
    Text,
    Spacer,
    HStack,
    Button,
    useToast,
  } from "@chakra-ui/react";
  import { PATH } from "@constants/path";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  
  function Layout({ children }) {
    const [isLogin, setIsLogin] = useState(false);
  
    useEffect(() => {
      const token = window.localStorage.getItem("token");
  
      if (token) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }, [window.localStorage.getItem("token")]);
  
    return (
      <>
        <Flex
          padding={4}
          sx={{ position: "sticky", top: 0, zIndex: 99 }}
          backgroundColor="teal.200"
          color="teal.700">
          <Link to={PATH.home}>
            <Text as="b" fontSize="xl">
              My Bookstore
            </Text>
          </Link>
          <Spacer />
          <HStack>
            {isLogin && (
              <Link to="/newbook">
                <Button colorScheme="blackAlpha">Create New Book</Button>
              </Link>
            )}
            {!isLogin ? (
              <Link to={PATH.login}>
                <Button>Login</Button>
              </Link>
            ) : (
              <Button
                colorScheme="blue"
                onClick={() => {
                  window.localStorage.removeItem("token");
                  setIsLogin(false);
                }}>
                Logout
              </Button>
            )}
          </HStack>
        </Flex>
        <Container maxW="container.xl" color="#262626" p={2} mt={4}>
          {children}
        </Container>
      </>
    );
  }
  
  export default Layout;
  