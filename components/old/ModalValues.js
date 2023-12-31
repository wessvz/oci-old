import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.css";

export default function Modal({ copy, headline, className }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.button}>Learn more</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay}>
          <Dialog.Content className={styles.DialogContent}>
            <div className={styles.sticky}>
              <Dialog.Close asChild>
                <button className={styles.close} aria-label="Close">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.0005 0.0581055C9.6386 0.0581055 7.32976 0.758485 5.36593 2.07068C3.4021 3.38287 1.87147 5.24794 0.967621 7.43003C0.063768 9.61212 -0.172721 12.0132 0.288059 14.3297C0.748839 16.6462 1.88619 18.7741 3.5563 20.4442C5.2264 22.1143 7.35424 23.2516 9.67074 23.7124C11.9872 24.1732 14.3884 23.9367 16.5704 23.0329C18.7525 22.129 20.6176 20.5984 21.9298 18.6345C23.242 16.6707 23.9424 14.3619 23.9424 12C23.9424 8.83281 22.6842 5.79534 20.4447 3.5558C18.2051 1.31626 15.1677 0.0581055 12.0005 0.0581055ZM16.7971 15.4639C16.9687 15.6418 17.0637 15.88 17.0614 16.1272C17.0592 16.3744 16.9599 16.6108 16.7851 16.7856C16.6102 16.9603 16.3737 17.0594 16.1264 17.0615C15.8792 17.0635 15.6411 16.9684 15.4633 16.7966L12.0005 13.3337L8.53763 16.7966C8.3609 16.9735 8.12112 17.073 7.87103 17.0732C7.62095 17.0733 7.38104 16.9741 7.20408 16.7974C7.02713 16.6207 6.92763 16.3809 6.92747 16.1308C6.92731 15.8807 7.0265 15.6408 7.20323 15.4639L10.6671 12L7.20357 8.53713C7.02675 8.36023 6.92746 8.12033 6.92752 7.87021C6.92759 7.62009 7.02701 7.38024 7.20391 7.20342C7.38082 7.0266 7.62072 6.92731 7.87084 6.92737C8.12096 6.92743 8.36081 7.02686 8.53763 7.20376L12.0005 10.6666L15.4633 7.20376C15.6402 7.0269 15.88 6.92752 16.1301 6.92749C16.3802 6.92746 16.62 7.02678 16.7969 7.20359C16.9737 7.38041 17.0731 7.62024 17.0732 7.87033C17.0732 8.12042 16.9739 8.36027 16.7971 8.53713L13.3337 12L16.7971 15.4639Z" />
                  </svg>
                </button>
              </Dialog.Close>
            </div>
            <div className={styles.modalWrapper}>
              <div className={styles[className]}>
                <div className={styles.modalTop}>
                  <div className={styles.wrapper}>
                    <Dialog.Title className={styles.headline}>
                      {headline}
                    </Dialog.Title>
                  </div>
                </div>
                <div className={styles.modalCopy}>
                  <Dialog.Description>{copy}</Dialog.Description>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
