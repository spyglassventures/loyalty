import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";
import Questions from "../components/questions_list";
import Link from 'next/link'; // import Link for the back button

export default function RestaurantDetail() {
  const router = useRouter();
  const { id, name, timestamp } = router.query;

  if (!id || !name || !timestamp) {
    return <p>Loading...</p>; // You can return null or some loading spinner here
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>ID: {id}</h1>
        {/* Other details */}
      </div>
      <div className={styles.card}>
        <Questions />
      </div>
    </main>
  );
}
