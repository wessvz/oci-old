import styles from "./Accordion.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function TermsAccordion() {
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
        <AccordionTrigger>Article 1 - Definitions</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <p>In these terms and conditions, the following definitions apply:</p>
          <ul>
            <li>1. OCI: the private limited company OCI BV.</li>
            <li>
              2. Client: refers to the person who receives a quotation from OCI,
              the person who gives OCI an order, the person who places an order
              with OCI, or the person who enters into an agreement with OCI
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-2">
        <AccordionTrigger>Article 2 - Applicability</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              2.1 These general terms and conditions of sale and delivery of
              OCI, hereinafter referred to as "Terms and conditions" exclusively
              apply to all quotations, offers, and/or agreements with OCI for
              the delivery of goods and/or the provision of services.
            </li>
            <li>
              2.2 The client's terms and conditions of any kind, whether or not
              contained in the client's general terms and conditions, are only
              applicable in addition to OCI's general terms and conditions if
              these terms and conditions have been explicitly and in writing
              accepted by OCI, but only to the extent that the client's terms
              and conditions do not conflict with OCI's terms and conditions.
            </li>
            <li>
              2.3 The client's mention or reference to their own purchasing,
              tendering, or other (general) terms and conditions does not apply
              to these purchasing/tendering or other (general) terms and
              conditions.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-3">
        <AccordionTrigger>
          Article 3 - Amendment of the conditions
        </AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <p>
            OCI is authorized to make changes to these conditions. These changes
            take effect at the announced time of entry into force. OCI will send
            the amended conditions to the client in a timely manner.
          </p>

          <p>
            If no time of entry into force has been communicated, changes to the
            conditions will take effect against the client as soon as the client
            has been notified of the change.
          </p>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-3">
        <AccordionTrigger>Article 4 - Offers</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              4.1 Each offer issued by OCI is non-binding and valid until the
              indicated expiration date.
            </li>
            <li>
              4.2 The prices stated in an offer or proposal are exclusive of VAT
              and other government levies, any costs incurred in connection with
              the agreement, including travel and accommodation, shipping and
              administrative costs, unless stated otherwise.
            </li>
            <li>
              4.3 OCI cannot be held to its offers or proposals if the client
              can reasonably understand that the offers or proposals, or any
              part thereof, contain an obvious mistake or typographical error.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
