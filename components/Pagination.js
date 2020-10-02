import styles from "../styles/components/pagination.module.scss";
import PaginationMU from "@material-ui/lab/Pagination";
import cn from "classnames";

function Pagination({
  defaultPageIndex = 1,
  selectedPageIndex = 1,
  onChangePage = () => {},
  totalPages,
}) {
  return (
    <div className={styles.container}>
      <PaginationMU
        siblingCount={0}
        boundaryCount={1}
        count={totalPages}
        page={selectedPageIndex}
        defaultPage={defaultPageIndex}
        shape="rounded"
        variant="outlined"
        onChange={onChangePage}
      />
    </div>
  );
}

export default Pagination;
