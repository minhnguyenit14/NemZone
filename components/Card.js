import cn from "classnames";
import styles from "../styles/components/card.module.scss";

function Card({ containerClassName, children, ...props }) {
  return (
    <div {...props} className={cn(styles.cardContainer, containerClassName)}>
      {children}
    </div>
  );
}

export default Card;
