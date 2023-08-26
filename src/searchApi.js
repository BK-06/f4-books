import axios from "axios";

const searchBooks = async (term) => {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        q: term,
      },
    }
  );
  //   console.log(response.data);
  return response.data;
};

export default searchBooks;
