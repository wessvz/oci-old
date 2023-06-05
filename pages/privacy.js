import GlobalHead from "@/components/layout/head/GlobalHead";
import Hero from "@/components/pages/resources/Hero";
import Section from "@/components/layout/Section";
import Copy from "@/components/layout/Copy";
import Title from "@/components/layout/Title";
import Wrapper from "@/components/layout/Wrapper";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <GlobalHead
        title="Privacy Policy - OCI"
        description="Find out how OCI handles personal data and cookies. If you have any questions, feel free to contact us."
        keywords="privacy policy, data protection, data privacy"
        name="Privacy Policy - OCI"
        url="https://www.ocibv.nl/privacy"
        robots="noindex, nofollow"
      />

      <Hero title="Privacy Policy" />

      <Section style={4}>
        <Title style={4}>Personal data and cookies</Title>
        <Copy style={1}>
          On this page, you will find information about how OCI handles personal
          data and cookies. When consulting our website and/or completing the
          contact form, OCI obtain some personal data.
        </Copy>
        <Wrapper style={4}>
          <Title style={5}>How do we handle your personal data?</Title>
          <Copy style={1}>
            Personal data is defined as information that can be traced back to a
            person, such as a name, a residential address, or an email address.
            The protection of this data is regulated in the General Data
            Protection Regulation (GDPR). This regulation helps protect the
            privacy of citizens and also applies to personal data collected via
            the internet.
          </Copy>
          <Copy style={1}>
            Under this regulation, it must be clear for what purpose the data is
            being stored. OCI uses your personal data only for the purpose for
            which you have provided it. The data requested in a contact form is
            necessary to adequately, timely, and completely process your
            response.
          </Copy>
          <Copy style={1}>
            OCI does not keep your personal data longer than necessary for that
            purpose. In addition, data is used for knowledge building, improving
            the functioning of websites and keeping statistics.
          </Copy>
        </Wrapper>

        <Wrapper style={4}>
          <Title style={5}>Sharing personal data with third parties</Title>
          <Copy style={1}>
            OCI does not share your data with third parties and only provides it
            if necessary for the execution of our agreement with you or your
            organization, to comply with what you request, or to comply with a
            legal obligation.
          </Copy>
        </Wrapper>

        <Wrapper style={4}>
          <Title style={5}>Viewing, adjusting or deleting data</Title>
          <Copy style={1}>
            You have the right to view, correct or delete your personal data.
            You also have the right to revoke your consent for data processing
            or to object to the processing of your personal data by OCI and you
            have the right to data portability. That means you can request us to
            send the personal data we have from you in a computer file to you or
            another organization you have named. You can send a request for
            access, correction, deletion, data transfer of your personal data,
            or a request to revoke your consent or object to the processing of
            your personal data to{" "}
            <a href="mailto:info@ocibv.nl">info@ocibv.nl</a>. We respond
            immediately to your request and provide an answer as soon as
            possible, but no later than four weeks.
          </Copy>
        </Wrapper>

        <Wrapper style={4}>
          <Title style={5}>How we secure personal data</Title>
          <Copy style={1}>
            OCI takes the protection of your data seriously and takes
            appropriate measures to prevent misuse, loss, unauthorized access,
            unwanted disclosure, and unauthorized modification. If you feel that
            your data is not properly secured or there are indications of
            misuse, please <Link href="/contact">contact us</Link>.
          </Copy>
        </Wrapper>

        <Wrapper style={4}>
          <Title style={4}>Cookies</Title>
          <Copy style={1}>
            A cookie is a small text file that is stored on your computer,
            tablet, or smartphone by your browser during your first visit to a
            website. This allows your device to be recognized during each visit
            to the website.
          </Copy>
          <Copy style={1}>
            Ocibv.nl only uses functional and analytical cookies to make the
            website work well, improve user-friendliness, and measure and
            analyze website visits (web statistics). No prior consent from you
            is required for the placement of these cookies, as they do not
            affect your privacy.
          </Copy>
        </Wrapper>

        <Wrapper style={4}>
          <Title style={5}>No personal data</Title>
          <Copy style={1}>
            The cookies used by Ocibv.nl do not contain any personal data and do
            not affect your privacy. These cookies cannot be used to identify
            you. Ocibv.nl do not use tracking cookies and do not create visitor
            profiles. Ocibv.nl also does not use cookies placed by other
            websites, so-called third-party cookies, nor does Ocibv.nl place
            them itself.
          </Copy>
        </Wrapper>

        <Wrapper style={4}>
          <Title style={5}>Do you object to cookies?</Title>
          <Copy style={1}>
            If, despite this, you do not want Ocibv.nl to place cookies, you can
            set this in the privacy options of your browser. Please consult the
            manual or help function for this. Not accepting cookies may have
            consequences for the functioning of Ocibv.nl.
          </Copy>
        </Wrapper>
        <Wrapper style={4}>
          <Title style={5}>Do you have questions?</Title>
          <Copy style={1}>
            If you have any questions about how OCI handles personal data,
            please feel free to <Link href="/contact">contact us</Link>. We'll
            be happy to help.
          </Copy>
        </Wrapper>
      </Section>
    </>
  );
}
