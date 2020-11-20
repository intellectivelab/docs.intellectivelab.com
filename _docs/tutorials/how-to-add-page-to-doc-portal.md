---
title: How To Add Page To Documentation Portal
layout: docs
category: Unity 7
---
Documentation portal - [https://docs.intellectivelab.com/](https://docs.intellectivelab.com/)  
Documentation portal github repository - [https://github.com/intellectivelab/docs.intellectivelab.com](https://github.com/intellectivelab/docs.intellectivelab.com)

To edit and add new content to documentation portal you should:
- know basic [Markdown syntax](how-to-add-page-to-doc-portal/markdown-syntax.md)
- have environment and basic skills to work with [git](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/git-and-github-learning-resources)
- be a member of Intellective github organization 
- use [SSH key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh) for authentication 

To add new content to the project perform the following steps:
- Clone [documentation portal github repository]((https://github.com/intellectivelab/docs.intellectivelab.com)) to your local environment.
- Create a `new branch` from `master`. Use JIRA task number in name of your branch if needed.  
    Branch name examples:
    - feature/U7-3236_sunburst_chart
    - bugfix/U7-2759
    - release_notes  
- Define appropriate portal section for your new content and investigate what content already exists for this theme. 
- Create a new page or add content to existing page, using Markdown syntax, styling and folders structure 
requirements described in [How To Create Page](how-to-add-page-to-doc-portal/how-to-create-page.md). 
- Commit changes in your local branch.
- Push these commits to remote branch with the same name.
- Go to [Pull requests](https://github.com/intellectivelab/docs.intellectivelab.com/pulls) and create new pull request from your branch.
- Open your pull request page, click `Reviewers` on the right pane and choose reviewers from the list. Pull request creator and reviewers must represent:
    - Developers Team
    - QA
    - Technical writer (ikozyr-intellective)
    
    For example, if you are developer and create pull request, 
    you should request someone from QA team and technical writer for review. 
    At least 2 approving reviews required for merging pull request.
- Merging will be performed by a technical writer or doc portal support (ozimakov-intellective). 
- After merging, your content will appear on [documentation portal](https://docs.intellectivelab.com/) in seconds.
