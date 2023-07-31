import styles from "./List.module.css";

export default function List({ children, style = "default" }) {
  const className = styles[style];

  return <ul className={className}>{children}</ul>;
}
