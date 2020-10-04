import "../styles/global.scss";
import "../styles/components/slick/slick.css";
import "../styles/components/slick/slick-theme.scss";
import "lazysizes";
import { FacebookProvider } from "react-facebook";

export default function App({ Component, pageProps }) {
  return (
    <FacebookProvider version="v8.0" appId="1020874495051929">
      <Component {...pageProps} />
    </FacebookProvider>
  );
}
