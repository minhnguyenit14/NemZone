import cn from 'classnames';
import styles from '../styles/components/highlightBlock.module.scss';

function HighlightBlock({ 
    imgBackgroundUrl,
    containerClassName,
    contentClassName,
    children
 }) {
  return (
    <div className={cn("relative", containerClassName)}>
      {!!imgBackgroundUrl && (
        <div className={styles.imageBackground}>
          <img src={imgBackgroundUrl} />
        </div>
      )}

      <div className={cn("flexContainer max-w-app-width m-0-auto", contentClassName)}>
          {children}
      </div>
    </div>
  );
}

export default HighlightBlock;

function Item({ children, className, ...props }) {
  return <div className={cn("floatFlex", className)} {...props}>{children}</div>;
}

HighlightBlock.Item = Item;
