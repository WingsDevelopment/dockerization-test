import { DefaultReadOnlyTextField } from "../../../../../components/input/readonly/DefaultReadOnlyTextField";
import { RAsyncContent } from "../../../../../components/wrappers/RAsyncContent";
import { RSingleColumnBox } from "../../../../../components/wrappers/RSingleColumnBox";
import { Tag } from "../../../models/Tag";

interface Props {
  tag: Tag | undefined;
  isLoading: boolean;
}

export const DetailsTagBody: React.FC<Props> = ({ tag, isLoading }) => {
  return (
    <RAsyncContent isLoading={isLoading}>
      <RSingleColumnBox>
        <DefaultReadOnlyTextField value={tag?.id?.toString()} label="Id" />

        <DefaultReadOnlyTextField
          value={tag?.title?.toString()}
          label="Title"
        />

        <DefaultReadOnlyTextField
          value={tag?.description?.toString()}
          label="Description"
        />

        <DefaultReadOnlyTextField
          value={tag?.urlSlug?.toString()}
          label="Url Slug"
        />

        <DefaultReadOnlyTextField
          value={tag?.createdAt?.toString()}
          label="Created At"
        />

        <DefaultReadOnlyTextField
          value={tag?.updatedAt?.toString()}
          label="Updated At"
        />

        <DefaultReadOnlyTextField
          value={tag?.order?.toString()}
          label="Order"
        />
      </RSingleColumnBox>
    </RAsyncContent>
  );
};
