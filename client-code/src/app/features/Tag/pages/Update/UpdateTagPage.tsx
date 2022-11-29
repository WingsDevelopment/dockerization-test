import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { RPage } from "../../../../components/Page/RPage";
import { Tag, createEmptyTag } from "../../models/Tag";
import { TagRoutes } from "../../routing";
import { useUpdateTag } from "../../state/mutations/useUpdateTag";
import { useFetchTagById } from "../../state/queries/useFetchTagById";
import { UpdateTagForm } from "./components/UpdateTagForm";

export const UpdateTagPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateTagAsync, isLoading: isSubmitting } = useUpdateTag();
  const { tag, isLoading } = useFetchTagById(id);

  const handleSubmit = async (tag: Tag) => {
    const id = await updateTagAsync(tag);
    navigate(TagRoutes.details + "/" + id);
  };

  const initialData = useMemo(() => (tag ? tag : createEmptyTag()), [tag]);

  return (
    <RPage
      title="Update Tag"
      breadcrumbsLinks={[
        {
          name: "Update Tag",
          href: "/Tags",
        },
      ]}
    >
      <UpdateTagForm
        submitHandler={handleSubmit}
        isLoading={isLoading || isSubmitting}
        initialData={initialData}
      />
    </RPage>
  );
};

export default UpdateTagPage;
