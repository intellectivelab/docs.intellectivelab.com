import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import DocsHomepageFeatures from '../components/DocsHomepageFeatures';
import DocsHomepageHighlights from '../components/DocsHomepageHighlights';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Intellective Docs Homepage">
      <HomepageHeader />
      <main>
        <DocsHomepageFeatures />
        <DocsHomepageHighlights />
      </main>
    </Layout>
  );
}
