import Copy from "@/components/layout/Copy";
import Title from "@/components/layout/Title";
import styles from "./Copy.module.css";

const mission = (
  <div>
    <p className={styles.intro}>
      A comfortable home is essential for a happy life. Since our founding in
      2008, we've been dedicated to creating products and solutions that make
      our homes more comfortable, healthier, and safer.
    </p>
    <h3 className={styles.headline}>Entrepreneurial</h3>
    <p className={styles.copy}>
      As an entrepreneurial company, we are always looking for ways to break new
      ground and improve. We are proactive in our approach to innovation and
      take the initiative to get better every day. We make every effort to
      succeed, learn from our mistakes, and do better.
    </p>

    <h3 className={styles.headline}>Collaborative</h3>
    <p className={styles.copy}>
      At OCI, we believe that we are stronger together. We value collaboration
      and teamwork, both within our company and with our external partners. We
      share our knowledge and ask each other questions, giving honest feedback
      to make as much progress as possible. Our development strength is now
      known to many contacts, and we are proud of the reputation we have built.
    </p>

    <figure className={styles.quote}>
      <blockquote>
        <span className={styles.quoteText}>
          Engineering is not just about calculations and designs, it's about
          making a positive impact on the world around us.
        </span>
      </blockquote>
    </figure>

    <h3 className={styles.headline}>Responsible</h3>
    <p className={styles.copy}>
      We set ambitious goals and take responsibility for achieving them. We take
      on development projects from start to finish, and we are committed to
      delivering high-quality products that meet the needs of our customers. We
      believe that being responsible means being accountable for our actions and
      striving for excellence in everything we do.
    </p>

    <h3 className={styles.headline}>Flexible</h3>
    <p className={styles.copy}>
      In the ever-changing energy landscape, we know that flexibility is key. We
      embrace change and are always open to new ideas and approaches. We are
      committed to finding smart solutions for the complex challenges of the
      energy industry, whether it is related to hydrogen, drinking water, or
      innovations in the metering room. We are prepared to meet the demands of
      the future energy system, and we are excited to help our customers
      innovate and grow.
    </p>

    <h3 className={styles.headline}>Let's make impact together</h3>
    <p className={styles.copy}>
      Our commitment to environment, innovation, and quality drives everything
      we do. We are proud to have contributed to a sustainable energy and water
      system, and we will continue to push the boundaries of what is possible.
    </p>

    <p className={styles.copy}>
      Our customers include Dutch grid operators for heat and gas and water
      utilities, as well as installation companies and industrial players. We
      have earned their trust through our reliability, expertise, and commitment
      to excellence.
    </p>

    <p className={styles.copy}>
      So, whether you are looking for innovative solutions for the new energy
      landscape, or simply seeking to streamline your work, OCI is here to help.
      Contact us today to learn more.
    </p>
  </div>
);

const goal = (
  <div className={styles.copy}>
    <p className={styles.intro}>
      In today's world, sustainability has become a critical issue. Companies
      are facing growing pressure to operate in an environmentally responsible
      manner. At OCI, we recognize our role in shaping a sustainable future. We
      are dedicated to helping our customers take the necessary steps to improve
      our energy and water networks.
    </p>
    <h3 className={styles.headline}>A new era of challenges</h3>
    <p>
      The Dutch government has set a target of reducing the use of fossil fuels
      to zero by 2050. This ambitious goal requires a fundamental shift in the
      way businesses operate, and we are proud to be at the forefront of this
      transition. Our customers, which include EU network companies, water
      companies, and industrial sites, are facing new needs in terms of energy
      and water systems, and we are here to help them meet these challenges.
    </p>
    <h3 className={styles.headline}>
      Strengthening relationships for the future
    </h3>
    <p className={styles.copy}>
      OCI is dedicated to building long-lasting relationships with our customers
      by helping them achieve sustainable redesigns of their products or by
      developing new, sustainable systems. We believe that by working together
      to make a difference, we can create a better future for generations to
      come.
    </p>
    <h3 className={styles.headline}>Innovative and sustainable thinking</h3>
    <p className={styles.copy}>
      At OCI, we take pride in our innovative and sustainable thinking. We are
      constantly exploring new technologies and methods to improve our products
      and services. Our commitment to sustainable development is reflected in
      everything we do, from the materials we use to the design of our products.
    </p>
    <h3 className={styles.headline}>Let's work together</h3>
    <p className={styles.copy}>
      Join us on this journey towards a more sustainable future. Let's work
      together to create a world where we live in harmony with nature. Our
      tailored solutions and customer-focused approach ensure that you can trust
      us to help you achieve your goals. Contact us today to learn more about
      how we can make a positive impact together.
    </p>
  </div>
);

const environment = (
  <div className={styles.copy}>
    <p className={styles.intro}>
      Environmental responsibility is a core value at OCI. It's not just about
      reducing our carbon footprint. We believe that a sustainable future is one
      where every person is valued and given the opportunity to thrive. That's
      why we are devoted to give value to our society by supporting those who
      need it most.
    </p>
    <Title style={3} size="default">
      Everyone is welcome
    </Title>
    <Copy style={1}>
      We work with wonderful people, each with their own story. People who have
      experienced challenges in their lives and need support around
      participation and reintegration. We believe that everyone has something
      valuable to offer. Our goal is to help people reach their full potential.
    </Copy>
    <Title style={3} size="default">
      Certified PSO30+ Company
    </Title>
    <Copy style={1}>
      OCI is proud to be a PSO30+ certified company, which means we are a
      leading organization in the Netherlands for employment opportunities for
      the PSO target group. The PSO is a quality mark from TNO that recognizes
      organizations that excel in social entrepreneurship and prioritize labor
      participation for vulnerable groups in the labor market.
    </Copy>
    <Copy style={1}>
      The PSO distinguishes five performance levels, with PSO step 3/30+ being
      the highest. Being certified on this level places OCI among the
      frontrunners for employment opportunities for the PSO target group in the
      Netherlands.
    </Copy>
    <Title style={3} size="default">
      Carbon neutral since 2020
    </Title>
    <Copy style={1}>
      In our opinion businesses have a responsibility to be good stewards of
      planet earth. We are proud to have achieved carbon neutrality since 2020
      by producing more clean energy than we consume. However, we know that
      there is more work to be done. Moving forward, we are focused on reducing
      our carbon footprint even further and achieving carbon neutrality across
      our entire supply chain by 2030.
    </Copy>
  </div>
);

const innovation = (
  <div className={styles.copy}>
    <p className={styles.intro}>
      Research and development (R&D) teams are the fastest growing at Apple. R&D
      is also an area where diversity continues to lag across the tech industry.
      We have several ongoing and upcoming initiatives to help break down
      systemic barriers and bias in R&D and beyond.
    </p>
    <h3 className={styles.headline}>
      Making a difference with underrepresented communities.
    </h3>
    <p>
      In addition to Apple programs like Entrepreneur Camp, Impact Accelerator,
      and the Apple Developer Academy, Apple partners with external
      organizations to support and serve people from underrepresented
      communities. Many of our partnerships also provide opportunities for our
      engineers and other employees to engage with the next generation of
      innovators by offering their time as mentors and volunteers.
    </p>
  </div>
);

const quality = (
  <div className={styles.copy}>
    <p className={styles.intro}>
      Research and development (R&D) teams are the fastest growing at Apple. R&D
      is also an area where diversity continues to lag across the tech industry.
      We have several ongoing and upcoming initiatives to help break down
      systemic barriers and bias in R&D and beyond.
    </p>
    <h3 className={styles.headline}>
      Making a difference with underrepresented communities.
    </h3>
    <p>
      In addition to Apple programs like Entrepreneur Camp, Impact Accelerator,
      and the Apple Developer Academy, Apple partners with external
      organizations to support and serve people from underrepresented
      communities. Many of our partnerships also provide opportunities for our
      engineers and other employees to engage with the next generation of
      innovators by offering their time as mentors and volunteers.
    </p>
  </div>
);

export { mission, goal, environment, innovation, quality };
