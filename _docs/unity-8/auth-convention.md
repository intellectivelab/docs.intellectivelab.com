---
title: Unity as Service - Authorization
layout: docs
category: Unity 8
---
Authorization mechanics

## Overview
Unity as Service aka Headless uses 2 type of security headers. Standard OAuth "Authorization" header and auxiliary set that are prefixed with "Authorization-" keyword.


### OAuth
Supports Bearer tokens in the next format: 
```
Authorization:Bearer <TOKEN>
```
see https://datatracker.ietf.org/doc/html/rfc6750 for further details.

### Auxiliary set
In order to support actions that require cross repository actions client side must provide set of tokens in the next format:

```
Authorization-<REPOSITORY_ID_1>:<TOKEN_1>
Authorization-<REPOSITORY_ID_2>:<TOKEN_2>
...
```

Where REPOSITORY_ID_1 is supposed to be taken form Unity configuration.


### Usage

- If the only one repository interaction is expected then it is enough to put just an OAuth token.
 
- Otherwise - put all of them to the request as Auxiliary set and take any of them as Oauth token such as:

    ```
    Authorization:Bearer <TOKEN_1>
    Authorization-<REPOSITORY_ID_1>:<TOKEN_1>
    Authorization-<REPOSITORY_ID_2>:<TOKEN_2>
    ```
    or
    ```
    Authorization:Bearer <TOKEN_2>
    Authorization-<REPOSITORY_ID_1>:<TOKEN_1>
    Authorization-<REPOSITORY_ID_2>:<TOKEN_2>
    ```