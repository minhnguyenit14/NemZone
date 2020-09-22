import cn from "classnames";
import dynamic from "next/dynamic";
import styles from "../styles/components/highlightBlock.module.scss";
const LazyStaticImage = dynamic(() => import("./LazyStaticImage"));

function HighlightBlock({
  imgBackgroundUrl,
  imgBackgroundUrlPreview,
  containerClassName,
  contentClassName,
  children,
}) {
  return (
    <div className={cn("relative", containerClassName)}>
      {!!imgBackgroundUrl && (
        <LazyStaticImage
          url={imgBackgroundUrl}
          previewUrl={imgBackgroundUrlPreview}
          containerClassName={styles.imageBackground}
        />
        // <div className={styles.imageBackground}>
        //   <img src={imgBackgroundUrl} />
        // </div>
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
