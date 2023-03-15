import "../styles/theme.css";
import "../styles/global.css";
import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
