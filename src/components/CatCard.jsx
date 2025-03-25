import { useState, useEffect, useRef } from 'react';
import styles from '../styles/CatCard.module.css';

export default function CatCard({ cat }) {
  const [isHovered, setIsHovered] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    if (!isHovered && pRef.current) {
      pRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [isHovered]);

  return (
    <div className={styles.catcard}>
      <div className={styles.catdescription}>
        <h2>{cat.name}</h2>
        <span>
          {cat.grooming <= 3 ? 'Easy to maintain' : 'Hard to maintain'}
        </span>
        <span>
          {cat.child_friendly >= 3 ? 'Likes kids' : 'Enjoys solitude'}
        </span>
      </div>
      <img src={cat.image.url} alt={`image of ${cat.name}`} />
      <div
        className={styles.catinfo}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p ref={pRef}>{cat.description}</p>
      </div>
    </div>
  );
}
