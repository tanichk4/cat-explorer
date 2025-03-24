import styles from '../styles/CatCard.module.css';

export default function CatCard({ cat }) {
  return (
    <div className={styles.catcard}>
      <h2>{cat.name}</h2>
      <img
        src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
        alt={`image of ${cat.name}`}
      />
      <p>{cat.description}</p>
    </div>
  );
}
