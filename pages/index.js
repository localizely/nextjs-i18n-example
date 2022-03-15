import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

import styles from "../styles/Home.module.css";

export default function Home({ dir }) {
  const { locales } = useRouter();

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/ar" hrefLang="ar" />
        <link rel="alternate" href="http://example.com/fr" hrefLang="fr" />
        <link rel="alternate" href="http://example.com/nl-NL" hrefLang="nl-NL" />
      </Head>

      <header>
        <div className={styles.languages}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              {locale}
            </Link>
          ))}
        </div>
      </header>

      <main dir={dir} className={styles.main}>
        <h1 className={styles.title}>
          <FormattedMessage id="page.home.title" values={{ b: (chunks) => <b>{chunks}</b> }} />
        </h1>

        <p className={styles.description}>
          <FormattedMessage id="page.home.description" />
        </p>
      </main>
    </div>
  );
}
