import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import fr from "../lang/fr.json";
import nl_NL from "../lang/nl-NL.json";

import "../styles/globals.css";

const messages = {
  en,
  fr,
  "nl-NL": nl_NL,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
