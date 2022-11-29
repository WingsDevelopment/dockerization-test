import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import { RPage } from "../../../../components/Page/RPage";
import { CreateTag } from "../../models/CreateTag";
import { TagRoutes } from "../../routing";
import { useCreateTag } from "../../state/mutations/useCreateTag";
import { CreateTagForm } from "./components/CreateTagForm";

export const CreateTagPage: React.FC = () => {
  const { createCreateTagAsync, isLoading } = useCreateTag();
  const navigate = useNavigate();

  const handleSubmit = async (createTag: CreateTag) => {
    const id = await createCreateTagAsync(createTag);
    navigate(TagRoutes.details + "/" + id);
  };

  return (
    <RPage
      title="Create Tag"
      breadcrumbsLinks={[
        {
          name: "Create CreateTag",
          href: "/CreateTags",
        },
      ]}
      breadcrumbAction={
        <button
          className="btn btn-primary"
          onClick={() => navigate(TagRoutes.index)}
        >
          Back to list
        </button>
      }
    >
      <CreateTagForm submitHandler={handleSubmit} isLoading={isLoading} />
    </RPage>
  );
};

export default CreateTagPage;
