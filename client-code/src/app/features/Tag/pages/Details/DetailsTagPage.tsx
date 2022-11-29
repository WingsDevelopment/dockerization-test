import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { RPage } from "../../../../components/Page/RPage";
import { TagRoutes } from "../../routing";
import { useFetchTagById } from "../../state/queries/useFetchTagById";
import { DetailsTagBody } from "./components/DetailsTagBody";

export const DetailsTagPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tag, isLoading } = useFetchTagById(id);
  const navigate = useNavigate();

  return (
    <RPage
      title="Details Tag"
      breadcrumbsLinks={[
        {
          name: "Details Tag",
          href: "/Tags",
        },
      ]}
      breadcrumbAction={
        <button onClick={() => navigate(TagRoutes.update + "/" + tag?.id)}>
          Update tag
        </button>
      }
    >
      <DetailsTagBody tag={tag} isLoading={isLoading} />
    </RPage>
  );
};

export default DetailsTagPage;
