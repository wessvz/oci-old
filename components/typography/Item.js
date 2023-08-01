import styles from "./Item.module.css";

export default function Item({ children, style }) {
  const className = styles[style];

  return <li className={className}>{children}</li>;
}
