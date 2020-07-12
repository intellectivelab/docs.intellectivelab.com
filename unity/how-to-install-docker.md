## How To Install Docker

- Check if the Virtualization is enabled on your laptop 

	![virtualization-enabled](how-to-install-docker-1.png) 

- Download Docker from (https://hub.docker.com/editions/community/docker-ce-desktop-windows/) and install it 
- Run Docker as administrator if logged user is not a local admin 
	
	![run-docker-as-admin](how-to-install-docker-2.png) 

- Open Command Prompt or PowerShell in admin mode 
- Run `docker --version` or `docker run hello-world` to ensure you have a supported version of Docker 
	
	![cmd-docker-helloworld](how-to-install-docker-3.png) 

- After Docker desktop is installed, share the drive where you would place configuration files. 
	
	Open the Docker Desktop menu by clicking the Docker icon in the notifications area and select Settings 
	
	![docker-settings-select](how-to-install-docker-4.png) 
	
	Go to *Resources->File sharing*, select `C` drive and click Apply&Restart button 
	
	![docker-settings](how-to-install-docker-5.png) 
	
	Also you can verify and adjust Advanced settings accordingly 
	
	![docker-settings-advanced](how-to-install-docker-6.png) 
	
**Environment Management**

[Overview](./envmgmt/overview.md): GitOps approach implemented using Terraform, Helm, AWS EC2

## Contacts

[Contact Intellective](https://www.intellective.com/contact-us/)
