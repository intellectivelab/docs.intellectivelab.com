---
title: Security
layout: docs
category: Unity API
---
# Overview 

Unity uses the standard OAuth 2.0 three-legged authentication process, which proceeds as follows:

- The application asks an authentication service to present a login request to a user 
- After a successful login, the authentication service returns an authorization code to the application 
- The application exchanges the authorization code for an access token 
- The application then supplies the access token, in an authorization header, with API requests to gain access to Unity resources 

	![api-security](images/overview/APIAuthorizationProcessAnnotated_780x439.png)

# OAuth 2.0 Endpoints 

| Endpoint Type               | URL                                               |
|:----------------------------|:--------------------------------------------------|
| Authorization Endpoint      | https://<UNITY_URL>/public/api/oauth/authorize    |
| Token Exchange Endpoint     | https://<UNITY_URL>/public/api/oauth/token        |
| API Endpoint                | https://<UNITY_URL>/public/api/1.0.0              | 

# Tokens 

All Unity API calls require authentication using either a server token or bearer token. Token type is dependent on the endpoint.

From [RFC 6750](https://tools.ietf.org/html/rfc6750):

> **Bearer Token** 

> A security token with the property that any party in possession of the token (a `bearer`) can use the token in any way that any other party in possession of it can. Using a bearer token does not require a bearer to prove possession of cryptographic key material (proof-of-possession).

Bearer tokens allow your application to access the API on behalf of a user and are obtained after a user has authorized your application through one of the supported OAuth 2.0 authorization grants. Bearer tokens are valid for authentication on all end points within the API.

Because of their nature, access tokens are particularly sensitive. They should be securely stored and transported. While OAuth can be used over http connections. But, http should be restricted to development use and https must be used for production use.

Also, the user must have the applicationropriate security authorization in both the Unity application and any connected data sources. Otherwise, they can't access Unity components and data.

The Unity API uses OAuth 2.0 to allow developers to obtain an access token allowing access to a resource or do actions on behalf of a given user. OAuth 2.0 is a specification outlined in [RFC 6749](https://tools.ietf.org/html/rfc6749) that allows third-party services to make requests on behalf of a user without accessing passwords and other sensitive information.

# Getting and Using Tokens 

How your application will be authorized determines the process for getting and using tokens. In some cases, the application will use a system account to access the API. In that case, the authorization must be managed by the receiving application.

| User Authentication                               | System Account Authentication |
|:--------------------------------------------------|:------------------------------|
| [API User Authorization](user-authorization.md)  | [API Get Token](get-token.md)| 
| [API Get Token](get-token.md)                    | [API Use Token](use-token.md)|
| [API Use Token](use-token.md)                    |                               |

Other token related activities include: 

[API Refresh Token](refresh-token.md)  
[API Revoke Token](revoke-token.md) 

# Relevant Standards 

The relevant `oAuth2 class="subheader"` standards can be found [here](../references.md).

&rarr; [Next step: User Authorization](user-authorization.md)   