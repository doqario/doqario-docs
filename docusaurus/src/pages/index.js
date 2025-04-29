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


function HomepageHeader() {

  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/doqario/rules">
            Start to Journey
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
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div className={styles.page}>
        <aside className={styles.toc}>
          <TOC toc={toc} />
        </aside>
        <main className={styles.container}>
          <HomepageFeatures />
          <MDXWrapper>
            <MDXContent />
          </MDXWrapper>
        </main>
      </div>
    </Layout>
  );
}
