import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import ar from "../lang/ar.json";
import en from "../lang/en.json";
import fr from "../lang/fr.json";
import nl_NL from "../lang/nl-NL.json";

import "../styles/globals.css";

const messages = {
  ar,
  en,
  fr,
  "nl-NL": nl_NL,
};

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}

export default MyApp;
