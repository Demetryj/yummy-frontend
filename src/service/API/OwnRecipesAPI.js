import axios from 'axios';

export const getOwnRecipesAPI = (page = 1, per_page = 4) => {
  return axios
    .get(`/users/:userId/own-recipes?page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
      return data;
    });
};

export const removeOwnRecipeAPI = async id => {
  const result = await axios.delete(`/users/own-recipes/${id}`);
  if (result.status === 200) return getOwnRecipesAPI();
  return result;
};
