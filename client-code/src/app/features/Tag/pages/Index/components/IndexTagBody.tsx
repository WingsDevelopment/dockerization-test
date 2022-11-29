import { useMemo } from "react";
import { GenericPaginableTable } from "../../../../../components/table/GenericPaginableTable";
import { usePaginableSortedData } from "../../../../../hooks/usePaginableSortableData";
import { Tag } from "../../../models/Tag";
import TagTableBody from "./TagTableBody";

interface Props {
  tags: Tag[] | undefined;
  isLoading: boolean;
}

export const IndexTagBody: React.FC<Props> = ({ tags, isLoading }) => {
  const { dataToShow, page, setPage, rowsPerPage, setRowsPerPage, setSortBy } =
    usePaginableSortedData(tags, "");

  const tableLabels = useMemo(
    () => [
      { id: "id", label: "id", sortable: true },
      { id: "title", label: "title", sortable: true },
      { id: "description", label: "description", sortable: true },
      { id: "urlSlug", label: "urlSlug", sortable: true },
      { id: "createdAt", label: "createdAt", sortable: true },
      { id: "updatedAt", label: "updatedAt", sortable: true },
      { id: "order", label: "order", sortable: true },
      { id: "#", label: "#" },
    ],
    []
  );

  return (
    <GenericPaginableTable
      subheader="Tabela Tag"
      tableLabels={tableLabels}
      isLoading={isLoading}
      totalCount={tags?.length}
      currentPage={page}
      onPageChangeHandler={setPage}
      onChangeItemsPerPageHandler={setRowsPerPage}
      sortByHandler={setSortBy}
      itemsPerPage={rowsPerPage}
      tableBodyComponent={
        <TagTableBody tags={dataToShow} isLoading={isLoading} />
      }
    />
  );
};

export default IndexTagBody;
