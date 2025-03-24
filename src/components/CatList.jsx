import styles from '../styles/CatList.module.css';

export default function CatList({ catData, onCatClick }) {
  return (
    <ul className={styles.catlist}>
      {catData.map(cat => (
        <li
          className={styles.catitem}
          onClick={() => onCatClick(cat)}
          key={cat.reference_image_id}
        >
          {cat.name}
        </li>
      ))}
    </ul>
  );
}
