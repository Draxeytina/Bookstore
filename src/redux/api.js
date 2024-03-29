import axios from 'axios';

const urlBooks = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1PNaFeabzOX23CMqUcyE/books';

const changeFormat = (obj) => {
  const response = [];
  Object.entries(obj).forEach((data) => {
    response.push({
      ...data[1][0],
      id: data[0],
    });
  });
  return response;
};

export const axiosGet = async () => {
  try {
    const response = await axios.get(urlBooks);
    return changeFormat(response.data);
  } catch (error) {
    throw new Error(error);
  }
};

export const axiosPost = async (obj = {}) => {
  try {
    const response = await axios.post(urlBooks, obj);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const axiosDelete = async (id) => {
  try {
    const response = await axios.delete(`${urlBooks}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
