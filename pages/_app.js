import "../styles/global.scss";
import "../styles/components/slick/slick.css";
import "../styles/components/slick/slick-theme.scss";
import "lazysizes";

export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}
