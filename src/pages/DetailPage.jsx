import {
  Skeleton,
  Text,
  Box,
  Flex,
  Heading,
  Image,
  Container,
  Spacer,
  Button,
  useToast,
} from "@chakra-ui/react";
import Layout from "@components/Layout";
import { PATH } from "@constants/path";
import { deleteBookById, getBookDetail } from "@fetcher/index";
import { delay } from "@utils/index";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetailPage() {
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigation = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await getBookDetail(id);
        await delay(500);
        setBook(res.book);
        setIsLoading(false);
      } catch (e) {}
    };

    fetchBook();
  }, [id]);

  const onDelete = async () => {
    try {
      await deleteBookById(id);
      
      toast({
        title: `Book ${book.title} has been deleted`,
        status: "success",
        duration: 3000,
        isClosable: true, 
      });
      navigation(PATH.home);
    } catch (e) {
      
    }
  };

  return (
    <Layout>
      <Box>
        <Flex my="6">
          {isLoading ? (
            <Box w="100%">
              <Skeleton height="300px" my="6" />
            </Box>
          ) : (
            <>
              <Box w="300px">
                <Image src={`http://localhost:8000/${book?.image}`} alt={book?.title} />
              </Box>
              <Box ml="8">
                <Heading as="h1" size="lg">
                  {book?.title}
                </Heading>
                <Text fontSize="xl" fontWeight="semibold" color="gray.500">
                  {book?.author}
                </Text>
                <Text fontSize="xl" fontWeight="semibold" color="gray.500">
                  {book?.publisher}
                </Text>
                <Text fontSize="xl" fontWeight="semibold" color="gray.500" mb="4">
                  {book?.year} | {book?.pages} pages
                </Text>
                <Button colorScheme={"red"} onClick={onDelete}>
                  Delete
                </Button>
              </Box>
            </>
          )}
        </Flex>
      </Box>
    </Layout>
  );
}

export default DetailPage;
