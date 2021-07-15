import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
//import { whatIsUnitySidebar } from '../../sidebars';

//const unitySidebar = whatIsUnitySidebar;

const FeatureList = [
  {
    title: 'What is Unity?',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <ul>
          <li><a href="">Unity Overview</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Architecture</a></li>
          <li><a href="">Component Diagram</a></li>
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
          <li><a href="">Unity</a></li>
          <li><a href="">Unity for Salesforce</a></li>
          <li><a href="">Unity for nCino</a></li>
          <li><a href="">Unity for Dynamics</a></li>
          <li><a href="">Unity for ICN</a></li>
          <li><a href="">Interchange</a></li>
          <li><a href="">Enterprise Search</a></li>
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
          <li><a href="">React</a></li>
          <li><a href="">ExtJS</a></li>
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
          <li><a href="">API</a></li>
          <li><a href="">Installation</a></li>
          <li><a href="">Configuration</a></li>
        </ul>
      </>
    ),
  },
  {
    title: (<><a href="">Release Notes</a></>),
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

/**
 * Method Name: function ListFeatures(Svg, title, list)
 * 
 * Purpose: Returns a component listing of Unity features 
 * 
 * UNUSED
 * 
 * @param {Svg, title, list}   
 * @returns html
 */

function ListFeatures({Svg, title, list}) {
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