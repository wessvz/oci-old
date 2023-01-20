import styles from "./MobileFooter.module.css";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function MobileFooter() {
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
    <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <Accordion.Item className={styles.AccordionItem} value="item-1">
        <AccordionTrigger>Services</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              <Link href="/marketing">Online marketing</Link>
            </li>
            <li>
              <Link href="/development">Development</Link>
            </li>
            <li>
              <Link href="/strategie">Strategie</Link>
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-2">
        <AccordionTrigger>Over Full Stacks</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              <Link href="/about">Over Full Stacks</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/contact">Vacatures</Link>
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-3">
        <AccordionTrigger>Resources</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/cookies">Cookie Policy</Link>
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
