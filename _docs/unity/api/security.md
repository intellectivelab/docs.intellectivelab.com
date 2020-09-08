---
title: Security
layout: docs
category: Unity 7
---
# Overview 

Unity uses the standard OAuth 2.0 three-legged authentication process, which proceeds as follows:

- The application asks an authentication service to present a login request to a user 
- After a successful login, the authentication service returns an authorization code to the application 
- The application exchanges the authorization code for an access token 
- The application then supplies the access token, in an authorization header, with API requests to gain access to Unity resources 

	![api-security](images/overview/APIAuthorizationProcessAnnotated_780x439.png)

## OAuth 2.0 Endpoints 

| Endpoint Type               | URL                                               |
|:----------------------------|:--------------------------------------------------|
| Authorization Endpoint      | https://<UNITY_URL>/public/api/oauth/authorize    |
| Token Exchange Endpoint     | https://<UNITY_URL>/public/api/oauth/token        |
| API Endpoint                | https://<UNITY_URL>/public/api/1.0.0              | 

## Tokens 

All Unity API calls require authentication using either a server token or bearer token. Token type is dependent on the endpoint.

From [RFC 6750](https://tools.ietf.org/html/rfc6750):

> **Bearer Token** 

> A security token with the property that any party in possession of the token (a `bearer`) can use the token in any way that any other party in possession of it can. Using a bearer token does not require a bearer to prove possession of cryptographic key material (proof-of-possession).

Bearer tokens allow your application to access the API on behalf of a user and are obtained after a user has authorized your application through one of the supported OAuth 2.0 authorization grants. Bearer tokens are valid for authentication on all end points within the API.

Because of their nature, access tokens are particularly sensitive. They should be securely stored and transported. While OAuth can be used over http connections. But, http should be restricted to development use and https must be used for production use.

Also, the user must have the applicationropriate security authorization in both the Unity application and any connected data sources. Otherwise, they can't access Unity components and data.

The Unity API uses OAuth 2.0 to allow developers to obtain an access token allowing access to a resource or do actions on behalf of a given user. OAuth 2.0 is a specification outlined in [RFC 6749](https://tools.ietf.org/html/rfc6749) that allows third-party services to make requests on behalf of a user without accessing passwords and other sensitive information.

## Getting and Using Tokens 

How your application will be authorized determines the process for getting and using tokens. In some cases, the application will use a system account to access the API. In that case, the authorization must be managed by the receiving application.

| User Authentication                               | System Account Authentication |
|:--------------------------------------------------|:------------------------------|
| [API User Authorization](#user-authorization)  | [API Get Token](#get-token)| 
| [API Get Token](#get-token)                    | [API Use Token](#use-token)|
| [API Use Token](#use-token)                    |                               |

Other token related activities include: 

[API Refresh Token](#refresh-token)  
[API Revoke Token](#revoke-token) 

## Relevant Standards 

The relevant `oAuth2 class="subheader"` standards can be found [here](references.md#relevant-standards).

# User Authorization 

There are two ways to secure an access token. In this page, we describe how to have the user authorize the application to act on their behalf. This is a two step process:

- Step 1. User authenticates to authorize your application.
- Step 2. Redirect with code: As a result of the user authenticating a redirect is returned that provides an access code. That code is subsequently used to to secure an access token.

The primary benefit of using this method is that your application authenticates as that user and the application authorizations are passed through to your application. 

**Note:** Replace `<PLACEHOLDERS>` in the sample with the appropriate details as described in the table.

## Step 1: User authorizes your application 

The user must grant your application permission to access their data or to execute actions on their behalf. Unity provides an authorization page where users securely sign in with their Unity username and password to grant permissions to your application. This authorization page is accessed through the authorization URL. To ensure that the user grants permissions to your application properly, supply query parameters to that URL as described below. 

```
// User Authorization URL:

     https://&lt;UNITY_URL&gt;/api/oauth/authorize?client_id=&lt;CLIENT_ID&gt;&amp;response_type=code&amp;redirect_uri=&lt;REDIRECT_URI&gt; 
```
### User Authorization Parameters 

| Parameter       | Description                   |
|:----------------|:------------------------------|
| response_type   | OAuth 2.0 response type. `code` is the only acceptable input here.|
| client_id       | The client ID of your application. This is used by your application to identify itself to the server.|
| redirect_url    | When the user completes the authorization, this is the URI for the redirect that occurs.|
| scope           | Space delimited list of grant scopes you would like to have permission to access on behalf of the user. By default, scope is `api`|
| state (optional)| State which will be passed back to you to prevent tampering. Enter your values as shown `&state=<YOUR_STATE_KEY>`|

## Step 2: Receive Redirect 

Once the Unity user authenticates and authorizes your application, Unity will issue an HTTP 302 redirect to the `redirect_uri` passed in Step 1. On that redirect, you will receive a single-use authorization code. 

```
// Redirect response:

    GET https://&lt;your-redirect-uri&gt;/?code=&lt;AUTHORIZATION_CODE&gt; 
```
Note the code query parameter above, this is the authorization code you need for the next step: Get Token 

# Get Token
# Use Token
# Revoke Token
# Refresh Token


