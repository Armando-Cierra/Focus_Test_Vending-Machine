import { API_URL } from '../config/constants';

export const getAllProducts = async () => {
  try {
    const data = await fetch(API_URL);
    return await await data.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
