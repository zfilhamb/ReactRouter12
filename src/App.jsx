import { ChakraProvider } from "@chakra-ui/react";
import { PATH } from "@constants/path";
import { LoginRegisterPage, DetailPage, HomePage, NewBookPage } from "@pages";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: PATH.login,
    element: <LoginRegisterPage />,
  },
  {
    path: PATH.register,
    element: <LoginRegisterPage />,
  },
  {
    path: PATH.detail,
    element: <DetailPage />,
  },
  {
    path: PATH.newbook,
    element: <NewBookPage />,
  },
  {
    path: PATH.home,
    element: <HomePage />,
  },
  {
    path: "/*",
    element: <Navigate to={PATH.home} />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
