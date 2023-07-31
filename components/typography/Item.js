import styles from "./List.module.css";

export default function Item({ children, style = "default" }) {
  const className = styles[style];

  return <li className={className}>{children}</li>;
}
