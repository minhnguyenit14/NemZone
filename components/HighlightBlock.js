import cn from 'classnames';
import styles from '../styles/components/highlightBlock.module.scss';

function HighlightBlock({ 
    imgBackgroundUrl,
    containerClassName,
    children
 }) {
  return (
    <div className={cn("relative", containerClassName)}>
      {!!imgBackgroundUrl && (
        <div className={styles.imageBackground}>
          <img src={imgBackgroundUrl} />
        </div>
      )}

      <div className="flexContainer max-w-app-width m-0-auto">
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
