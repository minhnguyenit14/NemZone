import styles from "../styles/components/lazyStaticImage.module.scss";
import cn from "classnames";

function LazyStaticImage({ url, previewUrl, containerClassName }) {
  const [isImgLoaded, setImgLoaded] = React.useState(false);
  const [isHidePreviewImg, setHidePreviewImg] = React.useState(false);
  React.useEffect(() => {
    if (previewUrl) {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setImgLoaded(true);
        setTimeout(() => setHidePreviewImg(true), 1000);
      };
    } else {
        setImgLoaded(true);
    }
  }, []);
  return (
    <div class={cn("relative w-full h-full", containerClassName)}>
      {!isHidePreviewImg && !!previewUrl && (
        <img
          className={cn(styles.previewImg, isImgLoaded && styles.showOut)}
          src={previewUrl}
        />
      )}
      {isImgLoaded && !!url && <img className={styles.realImg} src={url} />}
    </div>
  );
}

export default LazyStaticImage;
