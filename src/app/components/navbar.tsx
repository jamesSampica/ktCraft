import styles from "./navbar.module.css";

export default function Navbar() {
    return (
      <nav className={styles.navbar}>
          <div className={styles.container}>The Studio</div>
      </nav>
    );
  }