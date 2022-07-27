import axios from "axios";

export const apiServiceGet = async (
  url: string,
  params?: Record<string, string | number | undefined | null>
) => {
  try {
    const res = await axios.get(url, { params });
    return res;
  } catch (error) {
    return error;
  }
};
