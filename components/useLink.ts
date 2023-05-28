import { client } from "./../sanity/lib/client";
import useSWR from "swr";

const fetcher = (query: string) => client.fetch(query);

export const useLink = () => {
  const query = `*[_type == "link"] {
    title,
      url,
      icon,
      alt
  }
  `;

  const { data, error } = useSWR(query, fetcher, { refreshInterval: 1000 });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
