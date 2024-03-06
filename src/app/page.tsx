import Dashboard from "./Components/Presenter/Home/Dashboard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
}
