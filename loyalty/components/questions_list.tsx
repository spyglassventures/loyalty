import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";

export default function RestaurantDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Assuming name and timestamp come from the query string.
  const name = router.query.name;
  const timestamp = router.query.timestamp;

  const handleSend = () => {
    console.log('Data sent');
  };

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>ID: {id}</h1>
        <h1>Restaurant: {name}</h1>
        <h2>Timestamp: {timestamp}</h2>
        <input placeholder="Question 1" />
        <input placeholder="Question 2" />
        <input placeholder="Question 3" />
        <button onClick={handleSend}>Send</button>
      </div>
    </main>
  );
}
