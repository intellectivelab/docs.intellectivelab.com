import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { whatIsUnitySidebar } from '../../sidebars';

const unitySidebar = whatIsUnitySidebar;

const FeatureList = [
  {
    title: 'What is Unity?',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <ul>
          <li>Unity Overview</li>
          <li>Features</li>
          <li>Architecture</li>
          <li>Component Diagram</li>
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
          <li>Unity</li>
          <li>Unity for Salesforce</li>
          <li>Unity for nCino</li>
          <li>Unity for Dynamics</li>
          <li>Unity for ICN</li>
          <li>Interchange</li>
          <li>Enterprise Search</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Frameworks',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <ul>
          <li>React</li>
          <li>ExtJS</li>
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
          <li>API</li>
          <li>Installation</li>
          <li>Configuration</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Release Notes',
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
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function ListFeatures({Svg, title, }) {
  return(
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title}/>
      </div>
    </div>
  );
}

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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