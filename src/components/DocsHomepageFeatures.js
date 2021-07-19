import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
//import { whatIsUnitySidebar } from '../../sidebars';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

//const unitySidebar = whatIsUnitySidebar;

const FeatureList = [
  {
    title: 'What is Unity?',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <ul>
          <li><a href="docs/what-is-unity/unity-overview">Unity Overview</a></li>
          <li><a href="docs/what-is-unity/unity-features">Features</a></li>
          <li><a href="docs/what-is-unity/unity-architecture-principles">Architecture</a></li>
          <li><a href="docs/what-is-unity/unity-component-diagram">Component Diagram</a></li>
        </ul>
      </>

    ),
  },
  {
    title: 'Products',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <ul>
          <li><a href="docs/products/unity-8/u8-release-notes">Unity</a></li>
          <li><a href="docs/products/unity-salesforce/overview">Unity for Salesforce</a></li>
          <li><a href="docs/products/unity-for-ncino/overview">Unity for nCino</a></li>
          <li><a href="docs/products/unity-for-dynamics/unity-for-dynamics">Unity for Dynamics</a></li>
          <li><a href="docs/products/unity-for-icn/unity-for-icn">Unity for ICN</a></li>
        </ul>
      </>
    ),
  },
  {
    title: 'Knowledge Base',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <ul>
          <li><a href="docs/frameworks/unity-react/overview">Unity React Platform</a></li>
          <li><a href="docs/frameworks/unity-extjs/overview">Unity ExtJS Platform</a></li>
          <li><a href="docs/products/enterprise-search/overview">Enterprise Search</a></li>
          <li><a href="docs/products/interchange/deployment">Interchange</a></li>
          <li><a href="docs/tutorials/overview">Tutorials</a></li>
        </ul>
      </>
    ),
  },
  {
    title: 'Development',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <ul>
          <li><a href="docs/development/unity-api/overview">API</a></li>
          <li><a href="docs/development/unity-installation/overview">Installation</a></li>
          <li><a href="docs/development/unity-configuration/overview">Configuration</a></li>
        </ul>
      </>
    ),
  },
  {
    title: (<><a href="docs/release-notes/overview">Release Notes</a></>),
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'More',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <ul>
          <li><a href="https://docs.intellectivelab.com/storybook">Storybook</a></li>
          <li><a href="#PlaceHolder">SOLR</a></li>
          <li><a href="#PlaceHolder">Kafka</a></li>
        </ul>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        {description}
      </div>
    </div>
  );
}

export default function DocsHomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}