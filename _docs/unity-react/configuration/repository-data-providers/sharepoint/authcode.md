---
title: SharePoint Connector Configuration - Auth Code Flow
layout: docs
category: Unity 7
---
|**Note**: SharePoint Connector Configuration is the same for Unity ExtJS and Unity React.

# Description

Authorization Code flow used by Unity SharePoint connector to call SP on behalf of user. 
It uses additional authentication request to present Azure login page redirecting to Unity callback endpoint with authentication code after that.
There are two points where additional authentication requested:
 - New user session redirected to Azure login immediately after Unity login form or session initialized by SSO.  
 - Popup presented when access token expired, Unity web app refreshed after that. 
User access token is refreshed in background using refresh token, please check [Token Lifetime](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes) for details. 

Unity backend uses authentication code to get access token for session user and call SP REST API afterward. 
App registration certificate and application grants also used as system read only user to cache SP metadata.  

 Datasource configuration parameters:
 
 | Parameter | Required/Optional|Description | Example|
 |--------------------------|--------------------|-------------|--------|
 | RootUrl | Required| Root SharePoint URL. **Note:** site path configured at RepositoryDataProvider level and should not be included. | https://yourdomain.sharepoint.com |
 | ApplicationId | Required| Azure App registration applicationId (clientId) | f1d7c8bc-6284-4db8-968f-e88a9bca70e1 |
 | AuthorityUrl | Required| `https://login.microsoftonline.com/${AzureTenantId}`. Please find Directory (tenant) Id value at `App registration` > `Overview` page | https://login.microsoftonline.com/b128c161-3661-441c-8212-5116e40ef414 |
 | RedirectUrl | Required| `http://${UnityServer}:${UnityPort}/${ContextRoot}/services/oauth2/callback`. `UnityServer` - host name for the web unity application. `UnityPort` - port value for the unity web application. `ContextRoot` - server path unity web application mapped. **Note:** http could be only used for localhost, https MUST be used otherwise. | https://unity.server.com:9443/vu/services/oauth2/callback |
 | ClientCert | Required| Signed client certificate password protected. Certificate used to get access code from Azure authority url. It's also used to authenticate system user to SP. Please see [Create Self Signed Certificate](#self-signed-certificate) page for details |  |
 | Password | Required| Password for certificate above. Should be stored encrypted (use Unity config console to encrypt the value)  | password |
 | AzureDomain| Required| Domain name to be added/replaced for Unity user session if container authenticates user by simple name. This maps username like 'myuser' to 'myuser@yourdomain.com' known to Azure AD. **Note:** this value is case sensitive. | yourdomain.com|
 | OAuthPrompt | Optional| `[login|none]`. `login` - forces the user to enter credentials, negating single-sign on. Defaults to the Single Sign On behaviour - no interactive prompts if possible.  Please check [prompt option documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) for details |login|
 | OAuthDisableMessage | Optional| `[true|false]`. Defaults to `false`. Additional Unity message will be presented before Azure popup | true |
 | OAuthMode | Optional| `[redirect|popup]`. Defaults to `redirect`- Azure interaction in the same Unity window. `popup` - Azure interaction in a separate popup window | redirect|
 | TokenStorage | Optional| `[session|appication]`. Defaults to `session`. Defines access token lifecycle. Check [Token Storage](#token-storage) section below for details. | application|
 | ForceOAuthPrincipal | Optional| `[true|false]`. Defaults to `true`. `true`- forces the access token to have the same account as authenticated Unity user. `false` - allows user to login to Azure account that does not match Unity user.  | true |
 
An example of datasource configuration:

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

# Token Storage

Unity provides two options for the access token lifecycle.

- `session` - Azure access token associated with a user session.
Authentication is performed every time the user logs into Unity.

- `application` -  Azure access token associated with user account (e-mail). 
This mode is recommended when using SPNEGO SSO for web container authentication. 
An Azure authentication code looks up an access token in application cache by user account and doesn't perform 
Azure round trip if matching valid (not expired) access token found. Access tokens remain in application cache
until refresh token expired. `ForceOAuthPrincipal` setting must be configured to `true` (default) to enable this token storage option.

# Create App Registration 

To create App Registration  in Azure Portal for new Unity connector Authorization Code flow:   

 - Login to [Azure Portal](https://portal.azure.com) with your domain admin account
 - Navigate to `Azure Active Directory > App registrations`:
  
    ![App registrations](authcode/images/app_reg_nav.png)

## New App registration  

 - Click `New registration`: 
 
    ![New App registrations](authcode/images/app_reg_new.png)
 
 - Enter `Name` for the application and select `Single tenant` option:
 
    ![Name for the App registrations](authcode/images/app_reg_name.png)
 
 - At `App registration > Authentication` add web platform:
 
    ![Add platform](authcode/images/app_add_platform.png)
 
    and set redirect Url to `https://${UnityServer}:${UnityPort}/${ContextRoot}/services/oauth2/callback`:  
  
    ![Add platform](authcode/images/app_add_platform_redirect.png) 
 
    **Note:** https MUST be enabled for the Unity web application.

## Self Signed Certificate

 - Generate Client Certificate
  
   Use powershell script to generate self signed certificate. 
   Copy script: [Create-SelfSignedCertificate.ps1](authcode/downloads/Create-SelfSignedCertificate.ps1) to local folder.
   Open Windows PowerShell (Admin) command line at that folder end execute:   
```shell
PS C:\Code> .\Create-SelfSignedCertificate.ps1 -CommonName "UnitySpConnector" -StartDate 2020-09-21 -EndDate 2022-09-22 -Force
```
 - Use proper `StartDate` and `EndDate` for a certificate and enter a password:    

   ![Create-SelfSignedCertificate](authcode/images/generate_cert.png)
   
 - Copy content of the `UnitySpConnector.b64` file to clipboard and paste it to `<ClientCert>` connector datasource configuration. 
   Encode the password using Unity config console and put it to `<Password>` tag for SP connector datasource configuration.
 
 - Upload `UnitySpConnector.cer` file to Azure `App registrations > Certificats & secrets` page: 
 
   ![Upload certificate](authcode/images/app_cert_upload.png) 
 
## App permissions
  
 - At `App registrations > API permissions` select `Add permission`:

    ![Add permissionsName for the App registrations](authcode/images/app_permissions_add.png)
 
- Select `SharePoint` API:
  
    ![select sharePoint API](authcode/images/app_permissions_sp.png)
    
- Select `Delegated permissions`:
 
    ![delegated permissions for the App registrations](authcode/images/app_permissions_delegated.png)
 
 - Check `AllSites.FullControl` (if users need to manage permissions) or `AllSites.Read`, `AllSites.Write` and apply:
  
    ![select sharePoint API](authcode/images/app_permissions_sp_delegated_fc.png)

 - Add `Sites.Read.All` with `Application` type Sharepoint API permissions same way.
 Grant `Admin consent` to selected api permissions:
 
    ![select sharePoint API](authcode/images/app_permissions_sp_granted.png) 

- Use App registration data to fill in Unity `<DataSource>` configuration section.   

# Collect and verify existing Azure App registration settings

Use App registration data to fill in Unity DataSource configuration section. Following parameters required to configure Unity Sharepoint connector with Authorization Code flow: 
 - Read `Application ID` and `tenant Id` from Azure app registration: 
 
    ![Example App Registrations](authcode/images/app_id_tenant.png) 

 - Verify application API permission settings has SharePoint API Delegation Permission.  
 **Note:** For Users to be able to manage document permissions `AllSites.FullControl` required to be consented. 
 This does not give users FullControl permission in SP but allows to apply any actual user permission on behalf of user. 
 - Verify application API permission settings has SharePoint API Application `Sites.Read.All` Permission:
  
    ![Azure App Permissions](authcode/images/app_permissions_sp_granted.png)

 - Verify redirect Url filled with value matching unity deployment: 
 
    ![Azure App Redirect](authcode/images/app_redirect.png)  
    
 - Verify on the same page below `Treat application as public client` set to `No`. 
 - Use base64 encoded certificate (private part) with valid password in unity configuration. See [Self Signed Certificate](#self-signed-certificate) above.   
