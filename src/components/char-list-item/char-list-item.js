import styles from "./char-list-item.module.css";
import { forwardRef } from "react";

const CharListItem = forwardRef((props, ref) => {
  const { thumbnail, name } = props.char;
  return (
    <li
      tabIndex={0}
      onClick={props.onClickItem}
      className={styles.charlist__item}
      ref={ref}
    >
      <img
        className={styles.charlist__img}
        src={thumbnail}
        alt={name}
        style={props.style}
      />
      <p className={styles.charlist__name}>{name}</p>
    </li>
  );
});

export default CharListItem;
