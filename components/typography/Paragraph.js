import styles from "./Paragraph.module.css";

export default function Paragraph({ children, style = "default" }) {
  const className = styles[style];

  return <p className={className}>{children}</p>;
}
