---
title: User Authorization
layout: docs
category: Unity API
---
There are two ways to secure an access token. In this page, we describe how to have the user authorize the application to act on their behalf. This is a two step process:

- Step 1. User authenticates to authorize your application.
- Step 2. Redirect with code: As a result of the user authenticating a redirect is returned that provides an access code. That code is subsequently used to to secure an access token.

The primary benefit of using this method is that your application authenticates as that user and the application authorizations are passed through to your application. 

**Note:** Replace `<PLACEHOLDERS>` in the sample with the appropriate details as described in the table.

# Step 1: User authorizes your application 

The user must grant your application permission to access their data or to execute actions on their behalf. Unity provides an authorization page where users securely sign in with their Unity username and password to grant permissions to your application. This authorization page is accessed through the authorization URL. To ensure that the user grants permissions to your application properly, supply query parameters to that URL as described below. 

```
// User Authorization URL:

     https://&lt;UNITY_URL&gt;/api/oauth/authorize?client_id=&lt;CLIENT_ID&gt;&amp;response_type=code&amp;redirect_uri=&lt;REDIRECT_URI&gt; 
```
## User Authorization Parameters 

| Parameter                                         | Description                   |
|:--------------------------------------------------|:------------------------------|
| response_type   | OAuth 2.0 response type. `code` is the only acceptable input here.|
| client_id       | The client ID of your application. This is used by your application to identify itself to the server.|
| redirect_url    | When the user completes the authorization, this is the URI for the redirect that occurs.|
| scope           | Space delimited list of grant scopes you would like to have permission to access on behalf of the user. By default, scope is `api`|
| state (optional)| State which will be passed back to you to prevent tampering. Enter your values as shown `&state=<YOUR_STATE_KEY>`|

# Step 2: Receive Redirect 

Once the Unity user authenticates and authorizes your application, Unity will issue an HTTP 302 redirect to the `redirect_uri` passed in Step 1. On that redirect, you will receive a single-use authorization code. 

```
// Redirect response:

    GET https://&lt;your-redirect-uri&gt;/?code=&lt;AUTHORIZATION_CODE&gt; 
```
Note the code query parameter above, this is the authorization code you need for the next step: [Get Token](../get-token/) 

&rarr; [Next step: Get Token](../get-token/)   