import styles from "./Facts.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Facts() {
  const AccordionTrigger = forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header className={styles.AccordionHeader}>
        <Accordion.Trigger
          className={styles.AccordionTrigger}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  const AccordionContent = forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Content
        className={styles.AccordionContent}
        {...props}
        ref={forwardedRef}
      >
        <div className={styles.AccordionContentText}>{children}</div>
      </Accordion.Content>
    )
  );
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-1"
      collapsible
      className={styles.AccordionRoot}
    >
      <Accordion.Item className={styles.AccordionItem} value="item-1">
        <AccordionTrigger>
          <div className={styles.fact}>
            <span className={styles.eyebrow}>Foundation</span>2008
          </div>
        </AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-2">
        <AccordionTrigger>
          <div className={styles.fact}>
            <span className={styles.eyebrow}>Employees</span>20
          </div>
        </AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-3">
        <AccordionTrigger>
          <div className={styles.fact}>
            <span className={styles.eyebrow}>Products</span>1500+
          </div>
        </AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
