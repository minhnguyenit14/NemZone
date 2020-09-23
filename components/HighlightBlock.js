import cn from "classnames";
import dynamic from "next/dynamic";
import styles from "../styles/components/highlightBlock.module.scss";
const LazyStaticImage = dynamic(() => import("./LazyStaticImage"));

function HighlightBlock({
  imgBackgroundUrl,
  imgBackgroundUrlPreview,
  imgBackgroundClassName,
  containerClassName,
  contentClassName,
  children,
}) {
  return (
    <div className={cn("relative", containerClassName)}>
      {!!imgBackgroundUrl && (
        <div className={styles.imageBackground}>
          <LazyStaticImage
            src={imgBackgroundUrl}
            previewSrc={imgBackgroundUrlPreview}
            className={imgBackgroundClassName}
          />
        </div>
      )}

      <div
        className={cn(
          "flexContainer max-w-app-width m-0-auto",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default HighlightBlock;

function Item({ children, className, ...props }) {
  return (
    <div className={cn("floatFlex", className)} {...props}>
      {children}
    </div>
  );
}

HighlightBlock.Item = Item;
