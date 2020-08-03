---
title: Unity on Docker
layout: docs
category: Unity
---

# Prerequisites
## Unity configuration
Prepare Unity solution configuration files you want to use for the application. It should be added to the image using one of the 
following ways:
 - mounting files into the container
 - building the application container based on current image

Anyway, the main Unity configuration should be added to the container as the following file: ```/opt/vu/unity_config.xml```. 

## Application server configuration
Use OpenLiberty's server configuration file to add or modify resources needed by application such as data sources,
LDAP connection (or local users), any other 3rd-party JNDI resource.

Use [the following file](https://gitlab.devops.intellectivelab.com/unity-classic/unity-7/blob/master/modules/vu-cloud-parent/vu-docker-ol/server.xml) as your base for the custom configuration.

As always, there are options how to include your custom configuration - mounting a volume or building custom image.
To do this you can mount `server.xml` to any of the following locations:
 - ```/opt/vu/server.xml```
 - ```/opt/ol/wlp/usr/servers/defaultServer/server.xml```

Be advised: Unity image contains all the supported JDBC drivers you might want to use in /opt/ol/wlp/usr/shared/resources/jdbc folder: IBM DB2, Oracle DB, MS SQL Server and PostgreSQL. Default `server.xml` file declares corresponding libraries you may relate for the datasource configuration. See default `server.xml` and `Dockerfile` for the details.

Default `server.xml` considers using of the internal user's realm. This approach seems viable for development/testing environments only.
For production, use [this guide](https://www.ibm.com/support/knowledgecenter/SSEQTP_liberty/com.ibm.websphere.wlp.doc/ae/twlp_sec_ldap.html) to configure LDAP server integration.

# Container registry
You must have a GitLab account to access container registry. Use the following command to log into container registry using local docker agent:
```
docker login docker.devops.intellectivelab.com
```

# Available versions and tags
Each build of Unity container has the following set of tags you can use to address the most appropriate version:
 - To address the latest version (based on OpenLiberty by default): `docker.devops.intellectivelab.com/unity-classic/unity-7:latest`
 - To address the latest version based on OpenLiberty: `docker.devops.intellectivelab.com/unity-classic/unity-7:ol`
 - To address a specific version based on OpenLiberty: `7.X.Y[-SNAPSHOT]-ol` or `7.X.Y.Z[-SNAPSHOT]-ol`, e.g. `docker.devops.intellectivelab.com/unity-classic/unity-7:7.6.1-SNAPSHOT-ol` or `docker.devops.intellectivelab.com/unity-classic/unity-7:7.6.1.1-ol`

# Run as standalone Docker container
```
docker run --rm -it -v <LOCAL_PATH>:/opt/vu/unity_config.xml -v <LOCAL_PATH>:/opt/vu/server.xml -p 9080:9080 docker.devops.intellectivelab.com/unity-classic/unity-7:latest
```

# Advanced image customization
The image based on [the official OpenLiberty image](https://hub.docker.com/_/open-liberty). All the configuartion and customization capabilities this image provides
are supported here as well.
