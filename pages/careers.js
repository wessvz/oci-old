import GlobalHead from "@/components/layout/head/GlobalHead";
import Hero from "../components/pages/sustainability/Hero";
import Section from "@/components/layout/Section";
import Title from "@/components/layout/Title";
import Eyebrow from "@/components/layout/Eyebrow";
import Wrapper from "@/components/layout/Wrapper";
import Copy from "@/components/layout/Copy";
import Film from "@/components/pages/careers/Film";
import List from "@/components/typography/List";
import Item from "@/components/typography/Item";

export default function Vacature() {
  return (
    <>
      <GlobalHead
        title="We're hiring at OCI. Come and join our team."
        description="OCI is dedicated to connect energy and water grids through sustainable solutions and innovative products. Let's shape a greener future together."
        keywords="working at oci"
        name="We're hiring at OCI"
        url="https://www.ocibv.nl/careers"
      />
      <Hero />
      <Section style={1}>
        <Wrapper style={2} space="minimal">
          <Eyebrow style={1}>Vacature</Eyebrow>
          <Title style={1} width="home">
            Project Engineer
          </Title>
          <Copy style={2} width="normal">
            Op zoek naar een uitdagende baan? Bij OCI kun je jezelf verder
            ontwikkelen. Kom bij ons team en maak een waardevol verschil.
          </Copy>
        </Wrapper>
      </Section>
      <Section style={4}>
        <Title style={5}>Bedrijfsomschrijving</Title>
        <Copy style={1}>
          On this page, you will find information about how OCI handles personal
          data and cookies. When consulting our website and/or completing the
          contact form, OCI obtain some personal data.
        </Copy>
        <Wrapper style={4}>
          <Title style={5}>Functieomschrijving</Title>
          <Copy style={1}>
            Bij [Bedrijfsnaam] zijn we gedreven door innovatie en streven we
            ernaar om klant specifieke producten van topkwaliteit te
            ontwikkelen. Met een toonaangevende positie in de industrie zijn we
            op zoek naar een enthousiaste Project Engineer om ons dynamische
            team te versterken. Als Project Engineer speel je een cruciale rol
            in het ontwerp, de engineering en de realisatie van baanbrekende
            oplossingen voor onze gewaardeerde klanten. Ons bedrijf biedt een
            stimulerende werkomgeving waarin je jouw technische expertise kunt
            inzetten en jezelf voortdurend kunt blijven ontwikkelen.
          </Copy>
        </Wrapper>
        <Wrapper style={4}>
          <Title style={5}>Functieomschrijving</Title>
          <Copy style={1}>
            Als Project Engineer bij [Bedrijfsnaam] ben je onmisbaar in het
            gehele proces. In deze uitdagende rol ben je verantwoordelijk voor
            het ontwerpen en uitwerken van klant specifieke producten die
            voldoen aan de hoogste kwaliteitsnormen. Je werkt nauw samen met het
            projectteam en opdrachtgevers om de projectplanning, klant
            specifieke wensen en haalbaarheid te bespreken, waarbij je proactief
            meedenkt om de beste oplossingen te realiseren. Jouw waardevolle
            bijdrage loopt vanaf de conceptfase tot aan de succesvolle
            implementatie van elk project, waarbij je ervoor zorgt dat elke stap
            soepel verloopt.
          </Copy>
        </Wrapper>
        <Wrapper style={4}>
          <Title style={5}>Taken en verantwoordelijkheden</Title>
          <List>
            <Item>
              Uitvoeren van gedetailleerde engineeringwerkzaamheden voor klant
              specifieke producten, waarbij je altijd oog hebt voor innovatie en
              optimalisatie.
            </Item>
            <Item>
              Actief overleggen met het projectteam en opdrachtgevers om de
              behoeften van de klant volledig te begrijpen en te vertalen naar
              concrete oplossingen.
            </Item>
            <Item>
              Toezicht houden op het assemblageproces en waar nodig directe
              verbeteringen doorvoeren om een naadloze productie te waarborgen.
            </Item>
          </List>
        </Wrapper>
        <Wrapper style={4}>
          <Title style={5}>Wat verwachten we van jou</Title>
          <List>
            <Item>
              Je beschikt over een afgeronde HBO-opleiding in Werktuigbouwkunde
              en hebt bij voorkeur enige relevante werkervaring.
            </Item>
            <Item>
              Ruime kennis en ervaring met SOLIDWORKS zijn essentieel voor een
              vlotte start in deze functie.
            </Item>
            <Item>
              Je beheerst zowel de Nederlandse als de Engelse taal uitstekend,
              zowel in woord als geschrift.
            </Item>
            <Item>
              Als teamspeler ben je communicatief sterk en weet je effectief te
              schakelen tussen verschillende belanghebbenden.
            </Item>
            <Item>
              Je bent analytisch en probleemoplossend ingesteld, waardoor je
              altijd met doordachte oplossingen komt.
            </Item>
            <Item>
              Je hebt een leergierige instelling en bent bereid om jezelf
              voortdurend te blijven ontwikkelen.
            </Item>
          </List>
        </Wrapper>
        <Wrapper style={4}>
          <Title style={5}>Interesse?</Title>
          <Copy style={1}>
            Als jij gelooft dat je de juiste persoon bent voor deze rol, stuur
            dan jouw sollicitatiebrief en cv naar [contactgegevens]. We kijken
            uit naar jouw reactie en hopen je binnenkort te ontmoeten!
          </Copy>
        </Wrapper>
      </Section>
      <Film />
    </>
  );
}
