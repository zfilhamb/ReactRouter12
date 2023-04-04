import { instance } from "../config/axiosConfig";

async function getAllBooks() {
  try {
    const response = await instance.get("/books");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

async function registerUser(data) {
  try {
    const response = await instance.post("/register", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

async function loginUser(data) {
  try {
    const response = await instance.post("/login", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

async function createNewBook(data) {
  try {
    const response = await instance.post("books", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

async function getBookDetail(id) {
  try {
    const response = await instance.get(`/books/${id}`);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

async function deleteBookById(id) {
  try {
    const response = await instance.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

export { getAllBooks, registerUser, loginUser, createNewBook, getBookDetail, deleteBookById };