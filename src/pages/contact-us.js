import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact-us.module.css';

export default function ContactUsPage() {

    
    return (
    
    <Layout title={`Contact Us`}
    description="Intellective Docs">
        <main className={styles.main}>

            {/* Report bug collector */}
            {/* <script type="text/javascript" src="https://jira.intellective.com/s/d41d8cd98f00b204e9800998ecf8427e-CDN/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/2.2.4.7/_/download/batch/com.atlassian.plugins.jquery:jquery/com.atlassian.plugins.jquery:jquery.js?collectorId=425badfe"></script>
            <script type="text/javascript" src="https://jira.intellective.com/s/43b5bdc91be933d4dbff275f06cb0d49-T/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/4.0.1/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=425badfe"></script> */}


            {/* Enhancement Request collector */}
            {/* <script type="text/javascript" src="https://jira.intellective.com/s/d41d8cd98f00b204e9800998ecf8427e-CDN/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/2.2.4.7/_/download/batch/com.atlassian.plugins.jquery:jquery/com.atlassian.plugins.jquery:jquery.js?collectorId=c5884de4"></script>
            <script type="text/javascript" src="https://jira.intellective.com/s/43b5bdc91be933d4dbff275f06cb0d49-T/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/4.0.1/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=c5884de4"></script> */}

            {/* Request Info collector */}
            {/* <script type="text/javascript" src="https://jira.intellective.com/s/d41d8cd98f00b204e9800998ecf8427e-CDN/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/2.2.4.7/_/download/batch/com.atlassian.plugins.jquery:jquery/com.atlassian.plugins.jquery:jquery.js?collectorId=3cfc946d"></script>
            <script type="text/javascript" src="https://jira.intellective.com/s/43b5bdc91be933d4dbff275f06cb0d49-T/n71z7c/810001/ed30881a1c0940ba1231758ef6f853f8/4.0.1/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=3cfc946d"></script>

            <script type="text/javascript" src="/assets/js/contact-us.js"></script> */}

            <h1 className={styles.pageTitle}>
                Contact Us
            </h1>
            
            <p><strong>Maintenance and Small Enhancements (Client Requests) Governance:</strong></p>
            <ul>
                <li>All ideas and requests (Internal and clients) under the maintenance and small enhancement will go through a centralized process including roles and responsibilities.</li>
                <li>Estimates and rough sizing need to be done prior to prioritization decisions.</li>
                <li>No one could directly submit request to PE without getting vetted out through the new approval process.</li>
                <li>The proposed idea and request prioritization review process is performed weekly.</li>
                <li>There are often ideas which could be vetted out and ultimately promoted to the Roadmap governance committee.</li>
                <li>Defects and Enhancement requests from PS and Customers will have a process that is monitored daily.</li>
            </ul>
            <p className={styles.centered}><strong><span style={{color: '#dc3840'}}>Following information must be provided with each request:</span></strong>&nbsp;</p>
            <table className={styles.centered}>
                <tbody>
                    <tr>
                        <td>Components</td>
                        <td>List of all components affected by request</td>
                    </tr>
                    <tr>
                        <td>Customer/project</td>
                        <td>Information about account and project</td>
                    </tr>
                    <tr>
                        <td>Your build number</td>
                        <td>Current build number</td>
                    </tr>
                    <tr>
                        <td>Priority</td>
                        <td>Priority : Blocker, Critical, Major, Minor</td>
                    </tr>
                    <tr>
                        <td>Summary</td>
                        <td>One-line description of the request</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>Detailed request</td>
                    </tr>
                    <tr>
                        <td>Linked issues</td>
                        <td>JIRA issue # if you have it</td>
                    </tr>
                    <tr>
                        <td>Requirements URL</td>
                        <td>URL for page (Confluence) with requirements</td>
                    </tr>
                </tbody>
            </table>

            <a id="report-bug-trigger" href="#">Report a bug</a> <br/>


            <a id="request-enhancement-trigger" href="#">Enhancement request</a> <br/>


            <a id="request-info-trigger" href="#">Request info</a>


        </main>

    </Layout>
  );
}