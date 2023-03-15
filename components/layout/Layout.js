import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
