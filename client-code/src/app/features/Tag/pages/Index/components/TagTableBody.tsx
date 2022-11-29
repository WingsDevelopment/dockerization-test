import { useNavigate } from "react-router-dom";
import { GenericTableBody } from "../../../../../components/table/GenericTableBody";
import { Tag } from "../../../models/Tag";
import { TagRoutes } from "../../../routing";

interface Props {
  tags: Tag[] | undefined;
  isLoading: boolean;
}

export const TagTableBody: React.FC<Props> = ({ tags, isLoading }) => {
  const navigate = useNavigate();

  const rows = () => (
    <>
      {tags?.map((item, index) => (
        <tr key={index} className=" dark:bg-slate-700">
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.urlSlug}</td>
          <td>{item.createdAt}</td>
          <td>{item.updatedAt}</td>
          <td>{item.order}</td>
          <td align="right">
            <button onClick={() => navigate(TagRoutes.details + "/" + item.id)}>
              Detalji
            </button>
          </td>
        </tr>
      ))}
    </>
  );

  return (
    <GenericTableBody
      rows={rows()}
      hasData={tags !== undefined && tags.length > 0}
      isLoading={isLoading}
    />
  );
};

export default TagTableBody;
