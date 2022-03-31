import styles from './style.module.scss';

interface SubdcribeButtonProps {
  priceId: string;
}

export function SubdcribeButton({ priceId }: SubdcribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
