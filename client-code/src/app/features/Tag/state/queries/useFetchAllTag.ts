import { useQuery } from "react-query";
import { getServerErrorMessage } from "../../../../utils/utils";
import { useDefaultRQConfig } from "../../../../libs/reactQuery";
import { DIContext } from "../../context/DIContext";

export const FETCH_ALL_TAGS = "FETCH_ALL_TAGS";

export const useFetchAllTag = () => {
  const config = useDefaultRQConfig("useFetchAllTag");

  const { isLoading, error, data } = useQuery(
    [FETCH_ALL_TAGS],
    async () => {
      const response = await DIContext.TagRepository.GetAllTagAsync();
      return response;
    },
    {
      ...config,
    }
  );

  return {
    tags: data,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};
