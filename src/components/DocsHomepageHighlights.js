/* *************************************************************
 * FileName: DocsHomepageHighlights.js
 * 
 *  Purpose: To return a ReactJS component displaying the 
 *           highlights section. 
 */

import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './HomepageHighlights.module.css';
import ItemsCarousel from 'react-items-carousel';

// Highlight List Array 
const HighlightList = [
    {
        id: 1,
        title:"What is Unity?",
        location:"/docs/what-is-unity/unity-overview"
    },
    {
        id: 2,
        title:"Getting started with Unity 8",
        location:"/docs/tutorials/unity-8-user-guide"
    },
    {
        id: 3,
        title:"Unity 9???? MORE TO COME SOON",
        location:"#Placeholder-Not-A-Link"
    },
    {
        id: 4,
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        location:"#Placeholder-Not-A-Link"
    }
]

function Highlight({id, title, location}) {
    return (
        <a href={location}>
            <div id={clsx('card '+ id)} className={styles.card}>
                <h2>{title}</h2>
            </div>
        </a>
    )
}

export default function DocsHighlights() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 150;
    //const chevronHeight = 100;
    return (
        <section className={styles.carousel}>
            <div style={{ padding: `50px ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={20}
                    leftChevron={<button className={styles.leftButton}>{'<'}</button>}
                    rightChevron={<button className={styles.rightButton}>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                    infiniteLoop={true}
                >
                    {HighlightList.map((props, idx) => (
                        <Highlight key={idx} {...props} />
                    ))}
                </ItemsCarousel>
            </div>
        </section>
    );
}