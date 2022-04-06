import { useSession, signIn } from "next-auth/react";
import { api } from "../../services/api";
import styles from "./style.module.scss";

interface SubdcribeButtonProps {
  priceId: string;
}

export function SubdcribeButton({ priceId }: SubdcribeButtonProps) {
  const { data: session } = useSession();

  async function handleSubscription() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");
      const { sessionId } = response.data;

    } catch (error) {}
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscription}
    >
      Subscribe now
    </button>
  );
}
