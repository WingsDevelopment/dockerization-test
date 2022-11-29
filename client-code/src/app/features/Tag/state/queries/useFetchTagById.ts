import { useQuery, useQueryClient } from "react-query";
import { getServerErrorMessage } from "../../../../utils/utils";
import { useDefaultRQConfig } from "../../../../libs/reactQuery";
import { DIContext } from "../../context/DIContext";
import { tagModelExtension } from "../../infrastracture/DTOs/TagDTO";

export const FETCH_BY_TAG_ID = "FETCH_BY_TAG_ID";

export const useFetchTagById = (id: string | undefined) => {
  const config = useDefaultRQConfig("useFetchTagById");

  const { isLoading, error, data } = useQuery(
    [FETCH_BY_TAG_ID, id],
    async () => {
      const response = await DIContext.TagRepository.GetTagByIdAsync(id!);
      return response ? tagModelExtension(response) : undefined;
    },
    {
      ...config,
      enabled: !!id,
    }
  );

  return {
    tag: data,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};
