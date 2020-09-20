import cn from "classnames";
import styles from "../styles/components/heroBlock.module.scss";

function HeroBlock({
  children,
  containerClassName,
  contentClassName,
  backgroundUrl,
}) {
  return (
    <div className={cn(styles.imgDimmed, containerClassName)}>
      <div className={cn(styles.imageBackgroundDimmed)}>
        <img src={backgroundUrl} />
        <div className={cn("max-w-app-width flex flex-col items-center", contentClassName)}>{children}</div>
      </div>
    </div>
  );
}

export default HeroBlock;
