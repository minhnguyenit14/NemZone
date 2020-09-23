import cn from "classnames";
import dynamic from "next/dynamic";
import styles from "../styles/components/heroBlock.module.scss";
const LazyStaticImage = dynamic(() => import("./LazyStaticImage"));

function HeroBlock({
  children,
  containerClassName,
  contentClassName,
  contentWrapperClassName,
  imgBackgroundUrlPreview,
  imgBackgroundUrl,
}) {
  return (
    <div className={cn(styles.imgDimmed, containerClassName)}>
      <div
        className={cn(
          styles.imageBackgroundDimmed,
          imgBackgroundUrl && styles.cover,
          contentWrapperClassName
        )}
      >
        {!!imgBackgroundUrl && (
          <LazyStaticImage
            src={imgBackgroundUrl}
            previewSrc={imgBackgroundUrlPreview}
          />
        )}
        <div
          className={cn(
            "max-w-app-width flex flex-col items-center",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeroBlock;
