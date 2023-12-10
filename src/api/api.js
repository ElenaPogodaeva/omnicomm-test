import { baseUrl } from '../utils/constants';

export const getUniversities = async (params) => {
  try {
    const config = {
      method: 'GET',
      headers: {},
    };

    const newUrl = new URL(baseUrl);

    newUrl.search = new URLSearchParams(params).toString();

    const response = await fetch(newUrl.href, config);

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
