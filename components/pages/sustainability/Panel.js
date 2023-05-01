import Section from "@/components/layout/Section";
import Eyebrow from "@/components/layout/Eyebrow";
import Copy from "@/components/layout/Copy";
import Title from "@/components/layout/Title";
import TextButton from "@/components/button/TextButton";
import Flex from "@/components/layout/Flex";
import Column from "@/components/layout/Column";
import Figure from "@/components/layout/Figure";

export default function Panel({
  eyebrow,
  title,
  copy,
  image,
  alt,
  order,
  height,
  width,
}) {
  return (
    <Section style={2}>
      <Flex style={2}>
        <Column style="copy" order={order}>
          <Eyebrow style={3}>{eyebrow}</Eyebrow>
          <Title style={3} size="default">
            {title}
          </Title>
          <Copy style={1}>{copy}</Copy>
        </Column>
        <Column style="image">
          <Figure
            style={1}
            src={image}
            alt={alt}
            width={width}
            height={height}
          ></Figure>
        </Column>
      </Flex>
    </Section>
  );
}
