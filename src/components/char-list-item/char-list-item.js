import styles from "./char-list-item.module.css";

const CharListItem = (props) => {
  const { thumbnail, name } = props.char;
  return (
    <li className={styles.charlist__item}>
      <img
        className={styles.charlist__img}
        src={thumbnail}
        alt={name}
        style={props.style}
      />
      <p className={styles.charlist__name}>{name}</p>
    </li>
  );
};

export default CharListItem;
