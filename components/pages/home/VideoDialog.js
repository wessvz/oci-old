import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import dynamic from "next/dynamic";

import styles from "./VideoDialog.module.css";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function VideoDialog() {
  const [isHovering, setIsHovering] = useState(false);
  const handleClose = () => {
    setIsHovering(false);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.button}>
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="240"
              height="240"
              rx="120"
              fill="#050505"
              fill-opacity="0.6"
            />
            <path
              d="M170.559 114.755C174.674 117.041 174.674 122.959 170.559 125.245L98.9139 165.048C94.9147 167.27 90 164.378 90 159.803L90 80.1971C90 75.6222 94.9147 72.7304 98.9139 74.9521L170.559 114.755Z"
              fill="white"
            />
          </svg>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay}>
          <Dialog.Content className={styles.DialogContent}>
            <div className={styles.sticky}>
              <Dialog.Close asChild>
                <button
                  className={styles.close}
                  aria-label="Close"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={handleClose}
                >
                  <div className={styles.iconWrapper}>
                    {isHovering ? (
                      <svg
                        className={styles.icon}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.0005 0.0581055C9.6386 0.0581055 7.32976 0.758485 5.36593 2.07068C3.4021 3.38287 1.87147 5.24794 0.967621 7.43003C0.063768 9.61212 -0.172721 12.0132 0.288059 14.3297C0.748839 16.6462 1.88619 18.7741 3.5563 20.4442C5.2264 22.1143 7.35424 23.2516 9.67074 23.7124C11.9872 24.1732 14.3884 23.9367 16.5704 23.0329C18.7525 22.129 20.6176 20.5984 21.9298 18.6345C23.242 16.6707 23.9424 14.3619 23.9424 12C23.9424 8.83281 22.6842 5.79534 20.4447 3.5558C18.2051 1.31626 15.1677 0.0581055 12.0005 0.0581055ZM16.7971 15.4639C16.9687 15.6418 17.0637 15.88 17.0614 16.1272C17.0592 16.3744 16.9599 16.6108 16.7851 16.7856C16.6102 16.9603 16.3737 17.0594 16.1264 17.0615C15.8792 17.0635 15.6411 16.9684 15.4633 16.7966L12.0005 13.3337L8.53763 16.7966C8.3609 16.9735 8.12112 17.073 7.87103 17.0732C7.62095 17.0733 7.38104 16.9741 7.20408 16.7974C7.02713 16.6207 6.92763 16.3809 6.92747 16.1308C6.92731 15.8807 7.0265 15.6408 7.20323 15.4639L10.6671 12L7.20357 8.53713C7.02675 8.36023 6.92746 8.12033 6.92752 7.87021C6.92759 7.62009 7.02701 7.38024 7.20391 7.20342C7.38082 7.0266 7.62072 6.92731 7.87084 6.92737C8.12096 6.92743 8.36081 7.02686 8.53763 7.20376L12.0005 10.6666L15.4633 7.20376C15.6402 7.0269 15.88 6.92752 16.1301 6.92749C16.3802 6.92746 16.62 7.02678 16.7969 7.20359C16.9737 7.38041 17.0731 7.62024 17.0732 7.87033C17.0732 8.12042 16.9739 8.36027 16.7971 8.53713L13.3337 12L16.7971 15.4639Z" />
                      </svg>
                    ) : (
                      <svg
                        className={styles.icon}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM11.9882 13.4L8.48224 16.9295C8.29884 17.1154 8.04932 17.2211 7.78819 17.2236C7.65683 17.2237 7.52673 17.198 7.40535 17.1477C7.28396 17.0975 7.17367 17.0239 7.08079 16.931C6.9879 16.8381 6.91424 16.7278 6.86403 16.6064C6.81381 16.485 6.78802 16.3549 6.78814 16.2236C6.78672 16.0956 6.81217 15.9687 6.86283 15.8512C6.9135 15.7337 6.98827 15.6281 7.08229 15.5412L10.5999 12.0117L7.08229 8.48238C6.98945 8.39462 6.91548 8.28884 6.8649 8.17152C6.81432 8.05419 6.78821 7.92779 6.78814 7.80003C6.78849 7.6699 6.81477 7.54114 6.86545 7.42128C6.91612 7.30142 6.99018 7.19287 7.08328 7.10195C7.17639 7.01104 7.28668 6.93959 7.40771 6.89179C7.52875 6.84398 7.65809 6.82078 7.78819 6.82353C7.91326 6.82271 8.03719 6.84733 8.15245 6.89588C8.26772 6.94444 8.37191 7.01592 8.45869 7.10598L11.9882 10.635L15.5411 7.09413C15.6268 7.00188 15.7305 6.92818 15.8459 6.87758C15.9612 6.82699 16.0857 6.80058 16.2116 6.79998C16.3423 6.79865 16.472 6.82322 16.5932 6.87228C16.7143 6.92133 16.8246 6.9939 16.9175 7.08578C17.0105 7.17767 17.0844 7.28706 17.1349 7.40764C17.1853 7.52822 17.2114 7.65761 17.2116 7.78833C17.2146 7.91653 17.1898 8.04385 17.139 8.16161C17.0883 8.27937 17.0127 8.38479 16.9175 8.47068L13.3881 12.0117L16.9058 15.5177C17.092 15.7057 17.1975 15.959 17.1999 16.2236C17.2 16.3549 17.1742 16.485 17.124 16.6064C17.0738 16.7278 17.0001 16.8381 16.9073 16.9309C16.8144 17.0238 16.7041 17.0975 16.5827 17.1477C16.4613 17.1979 16.3312 17.2237 16.1999 17.2236C15.9399 17.2158 15.6923 17.1109 15.5058 16.9295L11.9882 13.4Z"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              </Dialog.Close>
            </div>
            <div className={styles.modalWrapper}>
              <div className={styles.modalCopy}>
                <Dialog.Description>
                  <ReactPlayer
                    url="./video/home-desktop.mp4"
                    playing={true}
                    playsinline="true"
                    width="100%"
                    height="100%"
                    className={styles.player}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Dialog.Description>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
