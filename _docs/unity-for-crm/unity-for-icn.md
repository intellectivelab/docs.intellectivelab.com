---
title: Unity for ICN
layout: docs
category: Unity 7
---
*content to be added*

# Known Issues

## `SameSite` cookie

Reference to JIRA: U7-3369

### Problem

Since Chrome v80 (February 2020) vast majority of browsers set this param to `Lax`. Previously it was `None`.
This means that browser won't send the cookies to the server back unless it is simple http `GET` request or first-party interaction.

```text
Set-Cookie: session=your_session; SameSite=None; Secure 
```

This part is important here:
```text
SameSite=None; Secure 
```

### Solution

#### Reverse-Proxy

In order to avoid that consider using any reverse-proxy, such as Nginx so that both ICN and Unity become on the same domain.

Example: 
1. 192.168.210.19 - PC with installed Unity
2. 192.168.210.18 - PC with installed ICN
     
In order to make it as common 192.168.210.19 domain install nginx on 192.168.210.19 with next conf:
```text
    ...
    server {
        ...
        listen       80;
        server_name  localhost;

        location /vu-sso/ {
            proxy_pass http://192.168.210.19:9081/vu-sso/;
        }
        
        location / {
            proxy_pass http://192.168.210.18:9080/;
        }
    ...
    }    
```
In order to make it as common 192.168.210.18 domain install nginx on 192.168.210.18 with next conf:
```text
    ...
    server {
        ...
        listen       80;
        server_name  localhost;

        location /vu-sso/ {
            proxy_pass http://192.168.210.19:9081/vu-sso/;
        }
        
    ...
    }    
```

As another approach there is an option to set `proxy_cookie_path` directive (install nginx on 192.168.210.18):
```text
    ...
    server {
        ...
        listen       80;
        server_name  localhost;

        location /vu-sso/ {
            proxy_cookie_path / "/; SameSite=None";
            proxy_pass http://192.168.210.18:9081/vu-sso/;
        }
    ...
    }
```

#### Browser

For debugging (or temporary fast solution) it is possible to change settings to the Chrome browser like that:
 
- Enter the following into your browser location bar and select `Disabled` in the drop-down: 
    `chrome://flags/#same-site-by-default-cookies`
    
- Select 'Disabled' option for `SameSite by default cookies` setting

- Select the `Relaunch` button.

Optional: do the same steps for `chrome://flags/#cookies-without-same-site-must-be-secure` setting.
