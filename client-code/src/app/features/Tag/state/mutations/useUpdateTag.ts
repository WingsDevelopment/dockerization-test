import { useMutation, useQueryClient } from "react-query";
import { getServerErrorMessage } from "../../../../utils/utils";
import { GlobalDIContext } from "../../../../context/GlobalDIContext";
import { useDefaultRQConfig } from "../../../../libs/reactQuery";
import { DIContext } from "../../context/DIContext";
import { tagDTOExtension } from "../../infrastracture/DTOs/TagDTO";
import { Tag } from "../../models/Tag";
import { FETCH_ALL_TAGS } from "../queries/useFetchAllTag";

export const useUpdateTag = () => {
  const { EnqueueMessage } = GlobalDIContext.NotificationService;
  const queryClient = useQueryClient();
  const config = useDefaultRQConfig("useUpdateTag");

  const { isLoading, error, mutateAsync } = useMutation(
    async (tag: Tag) => {
      const response = await DIContext.TagRepository.UpdateTagAsync(
        tagDTOExtension(tag)
      );
      return response;
    },
    {
      ...config,
      onSuccess: () => {
        queryClient.invalidateQueries([FETCH_ALL_TAGS]);
        EnqueueMessage("Tag is successfully updated", "success");
      },
    }
  );

  return {
    updateTagAsync: mutateAsync,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};
