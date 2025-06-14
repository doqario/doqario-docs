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
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Transforming Documentation into Actionable Systems</h1>
        <p className="hero-subtitle">
          Replace outdated documentation with living blueprints of how your systems, people, and processes work — and evolve.
        </p>
        <div className="hero-actions">
          <Link 
            className="button button--primary button--lg hero-cta"
            to=""
          >
            Get Started
          </Link>
          <Link 
            className="button button--outline button--lg hero-secondary"
            to=""
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
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