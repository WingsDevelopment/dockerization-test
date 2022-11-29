import { useMutation, useQueryClient } from "react-query";
import { getServerErrorMessage } from "../../../../utils/utils";
import { GlobalDIContext } from "../../../../context/GlobalDIContext";
import { useDefaultRQConfig } from "../../../../libs/reactQuery";
import { DIContext } from "../../context/DIContext";
import { createTagDTOExtension } from "../../infrastracture/DTOs/CreateTagDTO";
import { CreateTag } from "../../models/CreateTag";
import { FETCH_ALL_TAGS } from "../queries/useFetchAllTag";

export const useCreateTag = () => {
  const { EnqueueMessage } = GlobalDIContext.NotificationService;
  const queryClient = useQueryClient();
  const config = useDefaultRQConfig("useCreateTag");

  const { isLoading, error, mutateAsync } = useMutation(
    async (createTag: CreateTag) => {
      const response = await DIContext.TagRepository.CreateTagAsync(
        createTagDTOExtension(createTag)
      );
      return response;
    },
    {
      ...config,
      onSuccess: () => {
        queryClient.invalidateQueries([FETCH_ALL_TAGS]);
        EnqueueMessage("CreateTag is successfully created", "success");
      },
    }
  );

  return {
    createCreateTagAsync: mutateAsync,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};
