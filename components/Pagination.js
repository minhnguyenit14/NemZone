import styles from '../styles/components/pagination.module.scss';
import PaginationMU from "@material-ui/lab/Pagination";
import cn from 'classnames';

function Pagination() {

  return (
    <div className={styles.container}>
      <PaginationMU
        siblingCount={0}
        boundaryCount={1}
        count={19}
        shape="rounded"
        variant="outlined"
      />
    </div>
  );
}

export default Pagination;
