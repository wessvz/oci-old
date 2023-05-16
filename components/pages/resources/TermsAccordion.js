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
    <Accordion.Root type="single" collapsible>
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
              2.1. These general terms and conditions of sale and delivery of
              OCI, hereinafter referred to as "Terms and conditions" exclusively
              apply to all quotations, offers, and/or agreements with OCI for
              the delivery of goods and/or the provision of services.
            </li>
            <li>
              2.2. The Client's terms and conditions of any kind, whether or not
              contained in the Client's general terms and conditions, are only
              applicable in addition to OCI's general terms and conditions if
              these terms and conditions have been explicitly and in writing
              accepted by OCI, but only to the extent that the client's terms
              and conditions do not conflict with OCI's terms and conditions.
            </li>
            <li>
              2.3. The Client's mention or reference to their own purchasing,
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
            conditions will take effect against the Client as soon as the Client
            has been notified of the change.
          </p>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-4">
        <AccordionTrigger>Article 4 - Offers</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              4.1. Each offer issued by OCI is non-binding and valid until the
              indicated expiration date.
            </li>
            <li>
              4.2. The prices stated in an offer or proposal are exclusive of
              VAT and other government levies, any costs incurred in connection
              with the agreement, including travel and accommodation, shipping
              and administrative costs, unless stated otherwise.
            </li>
            <li>
              4.3. OCI cannot be held to its offers or proposals if the Client
              can reasonably understand that the offers or proposals, or any
              part thereof, contain an obvious mistake or typographical error.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-5">
        <AccordionTrigger>
          Article 5 - Purchase obligation, delivery and delivery time
        </AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              5.1. The client is obliged to take delivery of the purchased goods
              at the time they are delivered to him or at the time they are made
              available to the client according to the agreement. If the client
              refuses to take delivery or is negligent in providing information
              or instructions necessary for delivery, the goods will be stored
              at the client's risk. In that case, the client will be liable for
              all additional costs, including storage costs.
            </li>
            <li>
              5.2. The delivery time indicated by OCI in its offer or agreed
              upon between the parties always applies approximately. In case of
              non-timely delivery, the client must notify OCI in writing and set
              a reasonable deadline.
            </li>
            <li>
              5.3. Exceeding the delivery time does not oblige OCI to any
              compensation and does not give the client the right to terminate
              the agreement and/or suspend any obligations arising from the
              agreement.
            </li>
            <li>
              5.4. The delivery time is based on the working conditions
              applicable at the time of concluding the agreement and timely
              delivery of the goods ordered by OCI for the performance of the
              agreement. If delays occur outside the fault of OCI due to changes
              in said work and/or because goods ordered for the performance of
              the agreement are not delivered on time, the delivery time shall
              be extended as necessary.
            </li>
            <li>
              5.5. The goods are considered delivered with regard to the
              delivery time when they are ready for dispatch, all this after
              client has been notified in writing.
            </li>
            <li>
              5.6. OCI is entitled to perform the agreement by means of partial
              deliveries, unless expressly agreed otherwise in writing and/or
              the nature of the agreement is such that this is not feasible.
              With partial deliveries, each individual set of goods is
              considered delivered separately and OCI is entitled to invoice for
              each such partial delivery.
            </li>
            <li>
              5.7. If the client places an order on call, the order must be
              called and taken by the client no later than the last day of the
              call period.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-6">
        <AccordionTrigger>
          Article 6 - Risk and transfer of ownership
        </AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              6.1. After the relevant goods have left OCI's storage area or
              immediately after the goods are deemed delivered within the
              meaning of Article 5.5., the client assumes the risk for all
              direct and indirect damage that may arise from or caused by these
              goods.
            </li>
            <li>
              6.2. Damage to goods caused by, among other things, destruction of
              packaging is entirely at the expense and risk of the client.
            </li>
            <li>
              6.3. If the client provides OCI goods for processing, repair,
              inspection, or otherwise, these goods remain under the
              responsibility and risk of the client. The client must ensure
              adequate insurance coverage for these goods.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-7">
        <AccordionTrigger>Article 7 - Retention of title</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              7.1. Every delivery of goods by the seller to the buyer is made
              subject to retention of title until the buyer has paid all that he
              is due under this agreement or under previously concluded or to be
              concluded agreements, including interest and costs.
            </li>
            <li>
              7.2. Goods delivered by the seller, which fall under the retention
              of title as referred to in paragraph 1, may only be resold within
              the framework of normal business operations, provided that the
              buyer fulfills all its obligations arising from agreements
              concluded with the seller. Otherwise, the buyer is not authorized
              to pledge the goods to third parties or to encumber or dispose of
              them in any other way. The retention of title also extends to new
              goods that arise after processing. The buyer keeps the new goods
              for the seller.
            </li>
            <li>
              7.3. The buyer undertakes at all times to insure and keep insured
              the goods delivered under retention of title against fire,
              explosion and water damage, theft and to make the policy of this
              insurance available for inspection by the seller at first request.
            </li>
            <li>
              7.4. If the buyer fails to fulfill its obligations or if there is
              a reasonable fear that it will not do so, the seller is entitled
              to remove or have removed the delivered goods on which the
              retention of title referred to in Article 7.1 rests, from the
              buyer or from third parties holding the goods for the buyer. The
              buyer authorizes the seller to enter the place where these goods
              are located, or is obliged to provide all cooperation in this
              regard, on pain of a penalty of 10% per day to the seller of the
              amount owed by the buyer on the basis of this agreement or
              previously concluded agreements.
            </li>
            <li>
              7.5. If third parties wish to establish or assert any right to the
              goods delivered under retention of title, the buyer is obliged to
              inform the seller as soon as can reasonably be expected.
            </li>
            <li>
              7.6. If there is a danger of confusion as to the origin of the
              goods, the buyer is obliged to mark the goods delivered under
              retention of title as the property of the seller.
            </li>
            <li>
              7.7. The buyer grants the seller a right of pledge on all goods
              that are brought into the possession of the buyer by her in the
              context of the performance of the agreement with the seller, all
              claims of the buyer against insurers with regard to the goods
              delivered under retention of title and the claims that the buyer
              acquires against them, to provide further security for all that
              the seller may owe to the buyer in whatever capacity and on
              whatever grounds, including not due and conditionally due debts.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-8">
        <AccordionTrigger>Article 8 - Payment</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              8.1. Unless agreed otherwise, payment of the agreed price shall be
              made by OCI in cash upon delivery or within 30 days after delivery
              at OCI's office or at a bank account designated by OCI.
            </li>
            <li>
              8.2. OCI is always entitled to require security for the
              fulfillment of payment obligations and/or to send goods
              exclusively on a cash-on-delivery basis, as well as to suspend the
              fulfillment of the agreement until the abovementioned security has
              been provided to the satisfaction of OCI.
            </li>
            <li>
              8.3. All payments must be made without any deduction or setoff by
              the client. Bank charges and other costs related to payment
              transactions outside the Netherlands are for the account of the
              client.
            </li>
            <li>
              8.4. If the client does not pay within the agreed term, the client
              is in default by operation of law and shall owe statutory interest
              from the due date of the invoice, with a portion of a month being
              considered as a full month, as well as all judicial and
              extrajudicial costs incurred in the collection of the claim. The
              extrajudicial costs are fixed at the collection rate used by the
              Dutch Bar Association, but with a minimum of Euro 250.00.
            </li>
            <li>
              8.5. Costs incurred by OCI in connection with legal proceedings,
              including legal costs and other costs of legal assistance, shall
              be borne by the client, unless OCI is ordered by the Court in a
              final and binding judgment to bear the costs.
            </li>
            <li>
              8.6. In a situation as referred to in Article 8.9, all claims of
              OCI against the client become immediately due and payable.
            </li>
            <li>
              8.7. For the purposes of Article 8.6, the term "client" also
              includes any parent, subsidiary and/or affiliated company of the
              client within the meaning of the Companies Act and any other
              entity associated with the client, regardless of its legal form,
              as defined in Article 1 of these terms and conditions.
            </li>
            <li>
              8.8. Payments made by the client shall always be applied towards
              settlement of all accrued interest and costs and subsequently
              towards due invoices that have been outstanding for the longest
              period of time, even if the client specifies that the payment
              relates to a later invoice.
            </li>
            <li>
              8.9. In the event of liquidation, bankruptcy, or attachment or
              suspension of payments of the client, OCI's claims against the
              client become immediately due and payable. The claim against the
              client shall also be immediately due and payable if the client (a
              natural person) requests admission to judicial debt rescheduling,
              is placed under guardianship or dies.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-9">
        <AccordionTrigger>
          Article 9 - Defects and complaint deadlines
        </AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              9.1. The client must examine the purchased goods upon delivery.
              The client must verify whether the delivered goods correspond to
              the agreement, namely:
              <ul className={styles.circle}>
                <li>Whether the correct goods have been delivered;</li>
                <li>
                  Whether the delivered goods correspond in terms of quantity
                  (for example, the number and amount) with what was agreed;
                </li>
                <li>
                  Whether the delivered goods meet the agreed quality
                  requirements or, if absent, the requirements that can be
                  reasonably expected for normal use and/or commercial purposes.
                </li>
              </ul>
            </li>
            <li>
              9.2. If visible defects or shortages are detected, the client must
              report them to OCI in writing within five (5) days of delivery.
            </li>
            <li>
              9.3. The client must report non-visible defects within fourteen
              (14) days of discovery, but no later than thirty (30) days after
              delivery, in writing to OCI.
            </li>
            <li>
              9.4. Even if the other party complains in a timely manner, their
              obligation to pay for and accept completed orders remains. Goods
              can only be returned to OCI with prior written consent.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-10">
        <AccordionTrigger>Article 10 - Warranty</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              10.1. The goods to be delivered by OCI meet the customary
              requirements and standards that can reasonably be expected of them
              at the time of delivery.
            </li>
            <li>
              10.2. The warranty mentioned in paragraph 1 of this article also
              extends to the soundness of the goods delivered and to the quality
              of the material used and/or supplied for this purpose, insofar as
              it concerns non-apparent defects in the delivered goods, of which
              the client proves that they occurred within 2 months of delivery,
              exclusively or mainly as a direct result of an inaccuracy in the
              construction applied by OCI, or as a result of defective finishing
              or use of poor material.
            </li>
            <li>
              10.3 The warranty mentioned in paragraph 1 of this article is for
              a period of 6 months after delivery, unless expressly agreed
              otherwise in writing by the parties.
            </li>
            <li>
              10.4. Defects falling within the warranty referred to in Article
              10.1 will be remedied by OCI by repairing or replacing the
              defective part, either within OCI's company or by sending a
              replacement part. This choice is always made at the discretion of
              OCI.
            </li>
            <li>
              10.5. Excluded from the warranty are defects that arise in whole
              or in part due to:
              <ul className={styles.circle}>
                <li>
                  failure to comply with usage instructions or use other than
                  intended use;
                </li>
                <li>normal wear and tear;</li>
                <li>repairs by third parties, including the client;</li>
                <li>
                  the application of any government regulations regarding the
                  nature or quality of the materials used;
                </li>
                <li>
                  used materials or items used with the consent of the client;
                </li>
                <li>
                  materials or items provided by the client to OCI for
                  processing;
                </li>
                <li>
                  materials, items, methods, and constructions applied on the
                  explicit instruction of the client, as well as materials and
                  items provided by or on behalf of the client;
                </li>
                <li>
                  components obtained by OCI from third parties, provided that
                  the third party has not given any warranty to the seller.
                </li>
              </ul>
            </li>
            <li>
              10.6. If the client does not, properly or timely fulfill any
              obligation arising from the agreement concluded with OCI or any
              related agreement, OCI is not bound by any warranty, however
              named, with respect to any of these agreements. If the client
              carries out or causes repair or other work to be carried out on
              the delivered item without prior written approval from OCI, any
              claims under the warranty will be void.
            </li>
            <li>
              10.7. The alleged failure by OCI to fulfill its warranty
              obligations does not release the client from the obligations
              arising from any agreement concluded with OCI.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-11">
        <AccordionTrigger>Article 11 - Liability</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              11.1. If OCI were to be liable, this liability is limited to what
              is regulated in this provision.
            </li>
            <li>
              11.2. If OCI were to be liable for any damages, the liability of
              OCI is limited to the invoice value, exclusive of turnover tax,
              transport, import duties, storage, etc., of the item to which the
              liability relates, except to the extent that the liability
              insurers of OCI cover the damage.
            </li>
            <li>11.3. OCI is only liable for direct damage.</li>
            <li>
              11.4. OCI is never liable for indirect damage, including but not
              limited to consequential damages, loss of profits, missed savings,
              and damages due to business interruption.
            </li>
            <li>
              11.5. The limitations of liability included in this article do not
              apply if the damage is due to intent or willful recklessness on
              the part of OCI or its managerial subordinates.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-12">
        <AccordionTrigger>Article 12 - Force majeure</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              12.1. In the event of hindrance to the performance of the
              agreement due to force majeure, OCI is entitled to either suspend
              the execution of the agreement for a maximum of six months or
              (partially) terminate the agreement, without OCI's obligations to
              pay any damages.
            </li>
            <li>
              12.2. OCI also has the right to invoke force majeure if the
              circumstance that prevents (further) performance occurs after OCI
              should have fulfilled its obligation.
            </li>
            <li>
              12.3. If the client fails to fulfill any obligation arising from
              the agreements concluded with OCI and related agreements, or if
              there is good reason to fear that the client will not be able to
              fulfill its contractual obligations towards OCI, as well as in the
              event of bankruptcy, suspension of payment, cessation,
              liquidation, or partial transfer of the client's enterprise,
              including the transfer of a significant portion of its
              receivables, and if attachment is made against the client and this
              attachment is not lifted within a reasonable period, OCI is
              entitled to suspend the execution of any of these agreements for a
              maximum of six months or (partially), without OCI being obliged to
              pay any damages, and without prejudice to OCI's further rights.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-13">
        <AccordionTrigger>
          Article 13 - Suspension and dissolution
        </AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              13.1. OCI is entitled to suspend the fulfilment of its obligations
              or to dissolve the agreement if:
              <ul className={styles.circle}>
                <li>
                  Client does not or not fully comply with the obligations under
                  the contract;
                </li>
                <li>
                  Circumstances that have come to the knowledge of OCI after the
                  conclusion of the agreement give reasonable grounds to fear
                  that the client will not fulfill its obligations. In case
                  there are reasonable grounds to fear that the client will only
                  fulfill its obligations partially or improperly, the
                  suspension is only allowed to the extent justified by the
                  breach;
                </li>
                <li>
                  The client has been requested to provide security for the
                  fulfillment of its obligations under the agreement at the time
                  of the conclusion of the agreement, and such security is not
                  provided or is insufficient. Once security has been provided,
                  the authority to suspend is terminated unless it unreasonably
                  delays the execution of the agreement.
                </li>
              </ul>
            </li>
            <li>
              13.2. Furthermore, OCI is authorized to (cause to) terminate the
              agreement if circumstances arise that make performance of the
              agreement impossible or no longer reasonable and fair, or if other
              circumstances arise that make it unreasonable to expect the
              unchanged continuation of the agreement.
            </li>
            <li>
              13.3. In the event of termination of the agreement, OCI's claims
              against the client become immediately due and payable. If OCI
              suspends the fulfillment of its obligations, it retains its rights
              under the law and the agreement.
            </li>
            <li>
              13.4. If OCI proceeds with suspension or termination, it is not in
              any way obligated to compensate for any damage or costs incurred
              as a result. OCI always reserves the right to claim damages.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-14">
        <AccordionTrigger>Article 14 - Confidentiality</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              14.1. Both parties are obligated to maintain confidentiality
              regarding all confidential information that they have obtained
              from each other or from other sources in the context of their
              agreement. Information is considered confidential if it has been
              disclosed by a party or if it arises from the nature of the
              information.
            </li>
            <li>
              14.2. If, on the basis of a statutory provision or a judicial
              decision, OCI is obliged to provide confidential information to
              third parties designated by law or the competent court and OCI
              cannot rely on a legal or recognized or permitted right of
              non-disclosure, then OCI is not obliged to pay compensation or
              indemnification, and the client is not entitled to terminate the
              agreement on the basis of any resulting damage.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-15">
        <AccordionTrigger>Article 15 - Disputes</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              15.1. The judge in the place of business of OCI is exclusively
              authorized to hear disputes, unless the subdistrict court is
              authorized, in which case the subdistrict court with jurisdiction
              according to the rules of relative competence will hear the
              dispute. Nevertheless, OCI has the right to submit the dispute to
              the court with jurisdiction according to the appropriate legal
              process.
            </li>
            <li>
              15.2. Parties shall only refer to the judge after they have made
              every effort to settle a dispute through mutual consultation.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-16">
        <AccordionTrigger>Article 16 - Applicable law</AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <p>
            Only Dutch law applies to all legal relationships in which OCI is a
            party, even if an obligation is performed entirely or partially
            abroad or if the party involved in the legal relationship resides
            there. The applicability of the Vienna Sales Convention is excluded.
          </p>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.AccordionItem} value="item-17">
        <AccordionTrigger>
          Article 17 - Interpretation and location of conditions
        </AccordionTrigger>
        <AccordionContent className={styles.AccordionContent}>
          <ul>
            <li>
              17.1. These general terms and conditions have been filed with the
              Chamber of Commerce in Central Gelderland.
            </li>
            <li>
              17.2. The most recently filed version or the version that was in
              effect at the time of the conclusion of the agreement shall apply.
            </li>
            <li>
              17.3. In case of interpretation of the content and scope of these
              general terms and conditions, the Dutch text shall always prevail.
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
