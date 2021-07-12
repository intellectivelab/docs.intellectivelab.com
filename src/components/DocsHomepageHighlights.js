/* *************************************************************
 * FileName: DocsHomepageHighlights.js
 * 
 *  Purpose: To return a ReactJS component displaying the 
 *           highlights section. 
 */

import React from 'react';
import clsx from 'clsx';
import styles from './HomepageHighlights.module.css';

// Highlight List Array
// description can output a string or even html text objects. 
const HighlightList = [
    {
        id: 1,
        title:"This is Highlight Number One",
        description: (
            <>
                This is going to be text. Hopefully more than one line will appear within the
                description. Blah Blah Blah.

                <br/>

                New line haha.
            </>
        )
    },
    {
        id: 2,
        title:"Another Highlight",
        description:" \\ \" $ ! * % ^ # ' ` ~ - + ="
    },
    {
        id: 3,
        title:"Once again",
        description:"1234567890"
    },
    {
        id: 4,
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit," 
        + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
        + "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
        + "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla "
        + "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "
        + "culpa qui officia deserunt mollit anim id est laborum."
    }
]

function Highlight({id, title, description}) {
    if (id % 2 != 0) {
        return (
            <section id={clsx('highlight '+ id)}>
                <div>
                    <div className="row padding">
                        <div className={clsx('col col--6 ' + styles.description1)}>
                            <div className="padding-horiz--lg">
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className={clsx('col col--6 ' + styles.title1)}>
                            <div className="padding-horiz--lg">
                                <h1>{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    else {
        return(
            <section id={clsx('highlight '+ id)}>
                <div>
                    <div className="row">
                        <div className={clsx('col col--6 '+ styles.title2)}>
                            <div className="padding-horiz--lg">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className={clsx('col col--6 '+ styles.description2)}>
                            <div className="padding-horiz--lg">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default function DocsHighlights() {
    return (
        <section class="highlights">
            {HighlightList.map((props, idx) => (
                    <Highlight key={idx} {...props} />
            ))}
        </section>
    );
}