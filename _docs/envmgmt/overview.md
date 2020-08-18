---
title: Overview
layout: docs
category: Event Management
---
# Unity Environment Management
## Overview
It uses [Terraform](https://www.terraform.io), [Helm v3](http://helm.sh)
and GitLab CI/CD to implement infrastructure-as-code environment management.

Components:
* Terraform definitions:
    * `variables.tf` - Any variable values such as credentials, AMI ids, etc
    * `filenet-ec2.tf` - IBM Case Manager EC2 Server from given AMI
    * `unity-helm.tf` - Unity Helm chart definition
    * `terraform.tf` - Terraform remote state back-end and any other settings
* Unity Helm chart - `charts/unity`
    * Unity and UCM config - `charts/unity/config`
    * Unity environment properties (template) - `charts/unity/templates/_unity_ini.tpl`
    * Liberty server config (template) - `charts/unity/templates/_server_xml.tpl`
* Automated test suite - `test/e2e`
* GitLab CI/CD configuration - `.gitlab-ci.yml` 

## Branches
* `master` defines the entire structure, all general changes should be implemented here
and merged down to environment branches afterwards
* `env/{envId}` controls the environment with `envId` identifier 

## Public URL
Unity URL template: `http://{envId}.unity7.intellectivelab.com`

## Automation use-cases
1. Any change merged into `env/{envId}` will cause the environment update via pipeline
execution on GitLab.
2. If a pipeline is launched manually or by schedule it will reset the environment by
destroying and rolling out it again.

## Creating a new environment
Perform these steps manually. You should have Terraform CLI installed.
* Create a workspace: `terraform workspace new {newEnvId}`
* `git checkout -b env/{newEnvId}`
* ... do any changes if necessary ...
* `git commit -a -m 'Environment {newEnvId} has been created'`
* `git push`
