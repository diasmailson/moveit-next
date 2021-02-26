import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/42123109?s=460&u=0b3221cfa3703b8ae56a9ceaa4e1b3c561bd36b7&v=4"
        alt="Mailson Dias"
      />
      <div>
        <strong>Mailson Dias</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
