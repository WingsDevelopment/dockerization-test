import React from "react";
import { useNavigate } from "react-router-dom";
import { RPage } from "../../../../components/Page/RPage";
import { TagRoutes } from "../../routing";
import { useFetchAllTag } from "../../state/queries/useFetchAllTag";
import { IndexTagBody } from "./components/IndexTagBody";

export const IndexTagPage: React.FC = () => {
  const { tags, isLoading } = useFetchAllTag();
  const navigate = useNavigate();

  return (
    <RPage
      title="List Tag"
      breadcrumbsLinks={[
        {
          name: "Tag table",
          href: "/Tags",
        },
      ]}
      breadcrumbAction={
        <button
          className="btn btn-primary"
          onClick={() => navigate(TagRoutes.create)}
        >
          Create tag
        </button>
      }
    >
      <IndexTagBody isLoading={isLoading} tags={tags} />
    </RPage>
  );
};

export default IndexTagPage;
