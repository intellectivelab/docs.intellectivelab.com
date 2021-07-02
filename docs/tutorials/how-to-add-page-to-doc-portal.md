---
title: How to Add a Page to Documentation Portal
layout: docs
category: Unity 7
---
# Prerequisites

To edit and add new content to documentation portal you should:
- know basic [Markdown syntax](how-to-add-page-to-doc-portal/markdown-syntax.md)
- have environment and basic skills to work with [git](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/git-and-github-learning-resources)
- be a member of Intellective github organization called `intellectivelab` 

# How to Add a New Content to the Project

To add a new content to the project perform the following steps:
- Clone [documentation portal github repository]((https://github.com/intellectivelab/docs.intellectivelab.com)) to your local environment.  
    You can use either HTTPS or [SSH key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh) for authentication: 
    
    ![Clone repository](how-to-add-page-to-doc-portal/images/clone-repo.png)
    
    [How to Clone a Repository](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
- Create a `new branch` from `master`. Use JIRA task number in name of your branch if needed.  
    Branch name examples:
    - feature/U7-3236_sunburst_chart
    - bugfix/U7-2759
    - release_notes  
- Define appropriate portal section for your new content and investigate what content already exists for this theme. 
- Create a new page or add a content to existing page, using Markdown syntax, styling and folders structure 
requirements described in [How to Create a Page](how-to-add-page-to-doc-portal/how-to-create-page.md). 
- Commit changes in your local branch.
- Push these commits to remote branch with the same name.
- Go to [Pull requests](https://github.com/intellectivelab/docs.intellectivelab.com/pulls) and create a new pull request from your branch.
- Open your pull request page, click `Reviewers` on the right pane and choose reviewers from the list. Pull request creator and reviewers must represent:
    - Developers Team
    - Quality Assurance
    - Technical writer (ikozyr-intellective)
    
    For example, if you are developer and create a pull request, 
    you should request someone from QA team and a technical writer for review. 
    At least 2 approving reviews required for merging pull request.
    
    [How to Review Pull Request](how-to-add-page-to-doc-portal/how-to-review-pull-request.md)  
- Merging will be performed by a technical writer or doc portal support (ozimakov-intellective). 
- After merging, your content will appear on [documentation portal](https://docs.intellectivelab.com/) in seconds.

# References

Documentation portal - [https://docs.intellectivelab.com/](https://docs.intellectivelab.com/)   
Documentation portal github repository - [https://github.com/intellectivelab/docs.intellectivelab.com](https://github.com/intellectivelab/docs.intellectivelab.com)  
[How to Create a Page](how-to-add-page-to-doc-portal/how-to-create-page.md)  
[How to Review Pull Request](how-to-add-page-to-doc-portal/how-to-review-pull-request.md) 