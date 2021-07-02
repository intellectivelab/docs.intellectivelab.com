---
title: API Security
layout: docs
category: Unity 7
---
# Overview 

Unity uses the standard OAuth 2.0 three-legged authentication process, which proceeds as follows:

- The application asks an authentication service to present a login request to a user 
- After a successful login, the authentication service returns an authorization code to the application 
- The application exchanges the authorization code for an access token 
- The application then supplies the access token, in an authorization header, with API requests to gain access to Unity resources 

	![api-security](security/images/APIAuthorizationProcessAnnotated_780x439.png)

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

## Getting and using tokens 

How your application will be authorized determines the process for getting and using tokens. In some cases, the application will use a system account to access the API. In that case, the authorization must be managed by the receiving application.

| User Authentication                               | System Account Authentication |
|:--------------------------------------------------|:------------------------------|
| [API User Authorization](#user-authorization)  | [API Get Token](#get-token)| 
| [API Get Token](#get-token)                    | [API Use Token](#use-token)|
| [API Use Token](#use-token)                    |                               |

Other token related activities include: 

[API Refresh Token](#refresh-token)  
[API Revoke Token](#revoke-token) 

## Relevant standards 

The relevant `oAuth2 class="subheader"` standards can be found [here](overview.md#relevant-standards).

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
### User authorization parameters 

| Parameter       | Description                   |
|:----------------|:------------------------------|
| response_type   | OAuth 2.0 response type. `code` is the only acceptable input here.|
| client_id       | The client ID of your application. This is used by your application to identify itself to the server.|
| redirect_url    | When the user completes the authorization, this is the URI for the redirect that occurs.|
| scope           | Space delimited list of grant scopes you would like to have permission to access on behalf of the user. By default, scope is `api`|
| state (optional)| State which will be passed back to you to prevent tampering. Enter your values as shown `&state=<YOUR_STATE_KEY>`|

## Step 2: Receive redirect 

Once the Unity user authenticates and authorizes your application, Unity will issue an HTTP 302 redirect to the `redirect_uri` passed in Step 1. On that redirect, you will receive a single-use authorization code. 

```
// Redirect response:

    GET https://&lt;your-redirect-uri&gt;/?code=&lt;AUTHORIZATION_CODE&gt; 
```
Note the code query parameter above, this is the authorization code you need for the next step: Get Token 

# Get Token

Here, the token is retrieved from the server for future use. 
We use the Token Exchange endpoint to exchange the authorization code for an `access_token` which will allow you to make requests on behalf of the user.

There are two types of grant types for obtaining tokens, choose the grant type that fits your application: 
- [User Authorization Code](#user-authorization-code)
- [System Account](#system-account)

## User authorization code

The authorization code relies on the [user authenticating](#user-authorization) to Unity, which results in an authorization code that we use to secure the token.

| Parameter       | Description                   |
|:----------------|:------------------------------|
| client_id	      | The client ID of your application |
| client_secret	  | The Client Secret of your application |
| redirect_uri	  | The base of the URI must match the redirect_uri used during API Security User Authorization |
| grant_type	  | This should be set to authorization_code as noted in API Security User Authorization |
| code	          | The authorization code received from API Security User Authorization redirect |

## System account

In the password token method, the username and password are sent as part of the token request. This method is used for applications where a remote application accesses Unity with a trusted system account. 
The remote account is used for all transactions and is responsible for handling authorizations/access rights.

| Parameter       | Description                   |
|:----------------|:------------------------------|
| client_id	      | The client ID of your application |
| client_secret	  | The Client Secret of your application |
| grant_type	  | This should be set to password for username+password authentication |
| username	      | The username to use for authentication to obtain the token |
| password	      | The password to use for authentication to obtain the token |

## Expected response
When the token is returned, the `access_token` is valid for the time described by `expires_in` (in seconds).

```json
{
  "access_token": "xxx",
  "token_type": "Bearer",
  "expires_in": 2592000,
  "refresh_token": "xxx",
  "scope": "api"
}
```

# Use Token

You can pass an `access_token` as a bearer token in the Authorization header or pass it in as a query parameter in the URL.

```
curl -H "Authorization: Bearer &lt;ACCESS_TOKEN&gt;" \
https://&lt;UNITY_URL&gt;/api/1.0.0/documents 
In the code to the right, we extract the path that we want to call from the web page and send it to the sever to get a response.
```

The API paths are documented here. For this example, we are using `/config` for the path to return configuration information about the server.

# Revoke Token

To revoke an access token, ending the session and logging the user out of Unity, send a request like the following:

# Refresh Token

If you requested the access token the response will include a `refresh_token` which can be used to refresh the access token. 
When the user’s `access_token` has expired, you can obtain a new `access_token` by exchanging the `refresh_token` associated with the `access_token` using the Token Exchange endpoint. 
Refreshing the user access token means that you don’t need to ask the user to authorize your application for the same permissions again.

A `refresh_token` is valid for one year and tokens that have been inactive for more than one year will be invalidated.


