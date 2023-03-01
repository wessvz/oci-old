import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.css";
import { Close } from "@/public/icons/General";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function Modal({ title, text }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${styles.button} ${styles.buttonArrow}`}>
          Learn more
          <svg
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrowIcon}
          >
            <g className={styles.arrowHead}>
              <path
                d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          <Dialog.Description className={styles.desc}>
            {text}
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
