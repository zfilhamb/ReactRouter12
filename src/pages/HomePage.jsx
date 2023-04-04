import React, { useEffect, useState } from "react";
import { InfoCard, Layout } from "@components";
import { getAllBooks } from "@fetcher/index";
import { SimpleGrid } from "@chakra-ui/react";

function HomePage() {
  const [books, setBooks] = useState(null);

  console.log(books)
  useEffect(() => {
    const fetchBooks = async () => {
      const { books } = await getAllBooks();
      setBooks(books);
    };

    fetchBooks();
  }, []);

  return (
    <Layout>
      <SimpleGrid columns={3} spacing={6} justifyContent="center">
        {books?.map((book, idx) => (
          <InfoCard key={idx} {...book} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}

export default HomePage;
