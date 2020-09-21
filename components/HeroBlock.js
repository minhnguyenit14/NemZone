import cn from "classnames";
import styles from "../styles/components/heroBlock.module.scss";

function HeroBlock({
  children,
  containerClassName,
  contentClassName,
  contentWrapperClassName,
  backgroundUrl,
}) {
  return (
    <div className={cn(styles.imgDimmed, containerClassName)}>
      <div className={cn(styles.imageBackgroundDimmed, backgroundUrl && styles.cover, contentWrapperClassName)}>
        {!!backgroundUrl && <img src={backgroundUrl} />}
        <div className={cn("max-w-app-width flex flex-col items-center", contentClassName)}>{children}</div>
      </div>
    </div>
  );
}

export default HeroBlock;
