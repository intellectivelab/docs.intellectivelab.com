---
title: Datasources Configuration
layout: docs
category: Unity 7
---

Unity datasource connectors is a unified facade to integrate content from different external sources:   

- FileNet CE Connector
- Database Connector
- JNDI Connector
- CMOD Connector
- CM8 Connector
- CMIS Connector
- [SharePoint Connector](../configuration/datasources/sharepoint.md)
- UIE Connector

# Sharepoint datasource

```xml
  <Datasource ID="sharepoint_ds" class="com.vegaecm.vspace.datasources.SharepointDatasource">
    <RootUrl>http://sp.yourdomain.com/</RootUrl>
    <Login>read_only@yourdomain.com</Login>
    <Password>${EncryptedSystemUserPassword}</Password>
    <AzureDomain>${UnityUserDomain}</AzureDomain>
    <ApplicationId>${applicationId}</ApplicationId>
 </Datasource>
```

| Parameter          | Description |
|:-------------------|:------------|
| RootUrl                 | Root Sharepoint URL. **Note**: site path configured at RepositoryDataProvider level and should not be included.      |
| Login                   | System account used internally by a connector to cache Sharepoint metadata. Read Sharepoint permission level is enough for this account.    |
| Password                | Password for system account above. Should be stored encrypted (use Unity config console to encrypt the value)    |
| AzureDomain             | Domain name to be added/replaced for unity user session if container authenticate user by simple name. This map username like ‘myuser’ to ‘myuser@yourdomain.com’ known to Azure AD. Note: this is case sensitive value.|
| ApplicationId           | Azure App registration applicationId (aka clientId) |

# Sharepoint datasource - SSO

```xml
  <Datasource ID="sharepoint_ds" class="com.vegaecm.vspace.datasources.SharepointDatasource">
    <RootUrl>http://sp.yourdomain.com/</RootUrl>
    <Login>read_only@yourdomain.com</Login>
    <KrbLoginModule>krbsp</KrbLoginModule>
 </Datasource>
```

| Parameter          | Description |
|:-------------------|:------------|
| RootUrl                 | Root Sharepoint URL. Note: site path configured at RepositoryDataProvider level and should not be included.      |
| Login                   | System account used internally by a connector to cache Sharepoint metadata. Read Sharepoint permission level is enough for this account.    |

# Sharepoint Connector - Auth Code Flow
```xml
  <Datasource ID="sharepoint_ds" class="com.vegaecm.vspace.datasources.SharepointDatasource">
    <RootUrl>https://yourdomaincom.sharepoint.com</RootUrl>
    <AuthorityUrl>https://login.microsoftonline.com/${AzureTenantId}</AuthorityUrl>
    <ClientCert>${PasswordProtectedBase64EncodedCert}</ClientCert>
    <Password>${EncryptedCertPassword}</Password>
    <ApplicationId>${appRegistrationId}</ApplicationId>
    <RedirectUrl>https://${UnityServer}:${UnityPort}/${ContextRoot}/services/oauth2/callback</RedirectUrl>
    <AzureDomain>yourdomain.com</AzureDomain>
 </Datasource>
```

| Parameter          | Description |
|:-------------------|:------------|
| RootUrl                | Required. Root Sharepoint URL. Note: site path configured at RepositoryDataProvider level and should not be included |
| AuthorityUrl           | Required. https://login.microsoftonline.com/${AzureTenantId}. Please find Directory (tenant) Id value at “App registration” -> “Overview” page |
|ClientCert              | Required. Signed client certificate password protected. Certificate used to get access code from Azure authority url. It’s also used to authenticate system user to SP. Please see [Create Self Signed Certificate](../configuration/datasources/sharepoint/authcode.md#self-signed-certificate) page for details |
| Password               | Required. Password for certificate above. Should be stored encrypted (use Unity config console to encrypt the value) |
| ApplicationId          | Required. Azure App registration applicationId(aka clientId) |
| RedirectUrl            | Required. `http://${UnityServer}:${UnityPort}/${ContextRoot}/services/oauth2/callback`. UnityServer - host name for the web unity application. UnityPort - port value for the unity web application. ContextRoot - server path unity web application mapped. **Note:** http could be only used for localhost, https MUST be used otherwise. |
| AzureDomain| Required. Domain name to be added/replaced for unity user session if container authenticate user by simple name. This map username like 'myuser' to 'myuser@yourdomain.com' known to Azure AD. **Note:** this is case sensitive value. Unity connector validates Azure access token from auth popup belongs to the session user. |