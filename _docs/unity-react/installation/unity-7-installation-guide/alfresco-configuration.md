---
title: Unity 7 Alfresco configuration
layout: docs
category: Unity 7
---

# Alfresco CMIS HTTP/HTTPS

Port 443 and the HTTPS protocol settings must be enabled in `alfresco-global.properties` in Alfresco and Share. 
This is because if a proxy is serving https, and then proxying back to Tomcat using http, Tomcat determines that HTTP traffic is being served. 
This in turn informs the applications running in Tomcat that they are serving traffic over HTTP, 
and when Share or Alfresco internally generate URLs for page assets, they are generated with an http link (when the client browser expects https). 

Setting these properties:

    alfresco.port=443
    alfresco.protocol=https
    share.port=443
    share.protocol=https 

ensures that the applications generate URLs as HTTPS links.