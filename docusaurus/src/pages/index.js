import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import TOC from '@theme/TOC';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import MDXContent from './_index_info.mdx';
import MDXWrapper from '@theme/MDXContent';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg button--cta"
            to="/docs/doqario/rules"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const toc = MDXContent.toc || [];

  return (
    <>
      <Head>
        <title>Doqario — Blueprint-first documentation for future-ready teams</title>
        <meta
          name="description"
          content="Replace static documentation with living, executable blueprints that scale with your systems."
        />
        <meta property="og:title" content="Doqario" />
        <meta
          property="og:description"
          content="Replace static docs with living, executable blueprints that evolve with your team."
        />
        <meta
          property="og:image"
          content="https://doqario.github.io/doqario-docs/img/logo-doqario.svg"
        />
      </Head>

      <Layout
        title="Doqario — Blueprint-first documentation for future-ready teams"
        description="Replace static documentation with living, executable blueprints that scale with your systems."
      >
        <HomepageHeader />
        <div className={styles.page}>
          {/* <aside className={styles.toc}>
            <TOC toc={toc} />
          </aside> */}
          <main className={styles.container}>
            <HomepageFeatures />
            <MDXWrapper>
              <MDXContent />
            </MDXWrapper>
          </main>
        </div>
      </Layout>
    </>
  );
}
