import axios from "axios";

export const fetchUsers = async (searchTerm) => {
  const response = await axios.get(
    `${process.env.REACT_APP_GITHUB_URL}/search/users`,
    {
      params: {
        q: searchTerm,
      },
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );
  return response.data.items;
};
