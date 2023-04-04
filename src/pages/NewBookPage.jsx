import { FormControl, FormLabel, Input, Button, VStack, useToast } from "@chakra-ui/react";
import Layout from "@components/Layout";
import { createNewBook } from "@fetcher/index";
import React from "react";

function NewBookPage() {
  const toast = useToast();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    await createNewBook(formData);
    toast({
      title: "Create New Book",
      description: "You have successfully created a new book",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <VStack>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input name="title" required />
          </FormControl>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input name="author" required />
          </FormControl>
          <FormControl>
            <FormLabel>Publisher</FormLabel>
            <Input name="publisher" required />
          </FormControl>
          <FormControl>
            <FormLabel>Year</FormLabel>
            <Input name="year" type="number" required />
          </FormControl>
          <FormControl>
            <FormLabel>Pages</FormLabel>
            <Input name="pages" type="number" required />
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input name="image" type="file" accept="image/*" required />
          </FormControl>
          <Button type="submit">Create New Book</Button>
        </VStack>
      </form>
    </Layout>
  );
}

export default NewBookPage;
