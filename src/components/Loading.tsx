import styles from '../styles/components/Loading.module.css';

export default function Loading(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles['lds-roller']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
