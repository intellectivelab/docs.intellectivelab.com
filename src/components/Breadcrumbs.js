/* ---------------------------------------------------------------
 * FileName: Breadcrumbs.js
 *  Purpose: Component to output current path with breadcrumbs
 *  Updated: 7-15-21
 *  
 *     NOTE: This component is pretty greedy with resources
 *           This is based off of the DocSidebar.js found within
 *           @docusaurus/theme-classic node module folder. 
 * 
 *           When Docusaurus releases a new version/update,
 *           hopefully with an over-arching navigation component,
 *           [PLEASE] update this component in a similar fashion. 
 * 
 *      
 */

import React from 'react';
import clsx from 'clsx';
import router from 'react-router';
import style from './Breadcrumbs.module.css';

var themeCommon = require("@docusaurus/theme-common");


/* --------------------------------------------------------
 *    
 * 
 */

const isPathItem = (item, activePath) => {
  if (item.type === 'link') {
    return (0, themeCommon.isSamePath)(item.href, activePath);
  }

  if (item.type === 'category') {
    return item.items.some(subItem => isPathItem(subItem, activePath));
  }

  return false;
};

const Crumbs = (0, React.memo)(function Crumbs({
  items,
  ...props
}) { 
  
  if (items != undefined)
  {
  return items.map((item, index) => <Crumb key={index}
    item={item} {...props} />);
  }
  else 
  {
    return false;
  }
});

function Crumb(props) {
  switch (props.item.type) {
    case 'category':
      return <ItemCategory {...props} />;

    case 'link':
    default:
      return <ItemLink {...props} />;
  }
}

function ItemCategory({
  item,
  activePath,
  ...props
}) {
  const {
    items,
    label
  } = item;
  const isActive = isPathItem(item, activePath);

  if (items.length === 0) {
    return null;
  }

  if (isActive)
  {
    return (
      <span> {'>'} <a href="#" id={label}><span>{label}</span></a> <Crumbs items={items} activePath={activePath}/> </span>
    )
  }
  else 
    return null;
}

function ItemLink({
  item,
  activePath,
  ...props
}) {
  const {
    href, 
    label
  } = item;

  const isActive = isPathItem(item, activePath);
  if (isActive){
    return (
      <span>{'>'} {label}</span>
    )
  }
  else
    return null;
}

export default function Breadcrumbs({path, sidebar, sidebarName}) {
  
  var location = null;

  //Sidebar name switch
  //The following switch statement should not exist, but this is a quick fix before I'm put onto another project
  //TODO: Use 'path' to create links to absolute pages. If a page does not exist, or if link is broken,
  //      fall back a directory or until 
  switch (sidebarName) {
    case 'whatIsUnitySidebar':
      location = <>{'>'} <a href="/docs/what-is-unity/unity-overview">What is Unity?</a> </>;
      break;
    
    case 'unitySidebar' :
      location = <>{'>'} <a href="/docs/products/unity-8">Unity</a> </>;
      break;
    
    case 'salesforceSidebar' :
      location = <>{'>'} <a href="#">Salesforce</a> </>;
      break;
    
    case 'nCinoSidebar' :
      location = <>{'>'} <a href="#">Unity for nCino</a> </>;
      break;
    
    case 'dynamicsSidebar' :
      location = <>{'>'} <a href="#">Unity for Dynamics</a> </>;
      break;
    
    case 'icnSidebar' :
      location = <><a href="#">Unity for ICN</a> </>;
      break;
    
    case 'interchangeSidebar' :
      location = <>{'>'} <a href="#">Interchange</a> </>;
      break;
    
    case 'enterpriseSidebar' :
      location = <>{'>'} <a href="#">Enterprise</a> </>;
      break;
    
    case 'developmentSidebar' :
      location = <>{'>'} <a href="#">Development</a> </>;
      break;

    case 'frameworksSidebar' :
      location = <>{'>'} <a href="#">Frameworks</a> </>;
      break;

    case 'releaseNotesSidebar' :
      location = <>{'>'} <a href="#">Release Notes</a> </>;
      break;
    
    case 'learningSidebar' :
      location = <>{'>'} <a href="#">Learning</a> </>;
      break;
    
    default: 
      location = '';
      break;
  }
   

  //console.log(window.location.pathname);
  return(
    <div className={style.crumbDiv}>
      <a href="/">Docs Home</a> {location}<Crumbs items={sidebar} activePath={path} />
    </div>
  );
}