---
title: How To Create Page
layout: docs
category: Unity 7
---
This is a guide how to create page for github documentation site using [Markdown syntax](markdown-syntax.md). 

# Markdown File Structure And Page Structure 

## Metadata in the beginning of .md file 

```
---
title: New Page Title
layout: docs
category: Unity 7
---
```
This information is not visible on site page except title. Use first capital letters in each word to write title. Start page text just below metadata, without empty rows.  

## Title of page 
 
Don't type title of page as a header in markdown file. It will appear on page automatically from metadata above.   

## Table of contents 

Table of contents is created automatically from headers on page. It is important to headline chapters and subitems accordingly to their hierarchy.  

## Content of page  

### Text 

Use `# Heading Level 1` with first capital letters in each word to write titles of chapters. The first heading on page should be `# Heading`, otherwise automatic ToC might work incorrectly.    

Use `## Heading level 2`, `### Heading level 3` and `#### Heading level 4` with only first capital letter to write subchapters.  

Use proper order for heading levels. Do not place `### Heading level` under `# Heading Level`.

| **Note:** All headings must be different, then they might be anchors for links.  

Use backticks (`) to write: 
- commands and messages in Command Prompt: `cd C:\DockerUnity\`, `Login Succeeded` 
- file names and paths to directories and files: `config.xml`, `C:/DockerUnity`  
- paths to sections: `Resources > File sharing` 
- buttons: `Apply` button 
- boolean operators: `AND`,`OR`  

Bold text is automatically used in tables for column titles. 
Also use bold text to title parts of text like **Problem** and **Solution** in Troubleshooting chapter.  

To emphasize important notes, type: `| **Note:** plain text of note.`   
It will look on page:  

| **Note:** plain text of note.  

Use plain text for the rest of content.  

### Lists

Unordered lists are preferable. Use ordered lists if only it is necessary to count items.  
To align next paragraph inside list use `tab` before paragraph. 

### Code blocks

Use simple and highlighted code blocks with `json`, `xml` or `java` tags.  
To align code block with text in list use `tab` before code block.

### Images and screenshots requirements 

- Preferable image format is .png 
- Do not scale or compressed images, use actual pixel size
- Crop screenshots accurately 
- For highlighting use red frames, red color is R220 G56 B64 (#dc3840):  
	![highlight](how-to-create-page/images/image10.png) 
- If you need to add text on screenshot, use the same red color and Lato font
- Use `:` after the text before image if the image illustrates this text 

Images should be placed to `name-of-your-md-file/images/` folder:

![files-structure](how-to-create-page/images/files-structure.png) 
  
To insert image into page use `![image-title](name-of-your-md-file/images/name-of-image.png)` with empty rows before and after.  
To align left edge of the image with text in list, use `tab` before image code.

To insert a clickable image preview into page use `[![image-title](name-of-your-md-file/images/name-of-image-preview.png)](name-of-your-md-file/images/name-of-fullsize-image.png)` 
with empty rows before and after.

Optional: Most images look better when adding a grey 1px border, grey color is R167 G167 B167 (#a7a7a7). 
These borders will be added by a technical writer. 
Some images like schemes or diagrams on white background don't need any border. 


### Links to pages 

Use links on your page, and don't forget to add links to your page on other pages if needed.  
If you need to edit header on page, make sure there are no links to this header from another places.

#### Link to current page 

To insert a link to any header of current page type:  
`[Link Title](#header-title)`  
It will look on page: 
[Link Title](#link-to-current-page)

#### Link to another page on documentation portal 

To insert a link to any page of documentation portal type:  
`[Link Title](page-name.md)`, if it is placed in the same folder as your page  
`[Link Title](path/page-name.md)`, if it is placed in another folder. Use a relative path for `path`.  

To insert a link to any header of another documentation portal page type:  
`[Link Title](path/page-name.md#header-title)`  

#### Link to external page 

To insert a link to external page type:  
`[Link Title](url)`  

Don't use `here` as a link title, always try to use a meaningful name.  
Use `[url](url)` if you need to make url visible.

#### Downloads

If user should download file from your page, for example `config.xml` for tutorial, place it in `name-of-your-md-file/downloads/` folder.  
Make sure this file doesn't contain any confidential information like passwords etc.

### Tables

The simpler the better. Big tables might be rendered unpredictable.  
Keep empty row before and after table code. 

### Confidential information 

Remove all confidential information (passwords etc) from your content. Check carefully: 
- text
- images 
- links 
- files for downloads (configs etc)

## Next step recommendations (optional) 

You can type at the end of the page a link to the next step:  

`&rarr; [Next step: Next Page Title](path/next-page-name.md)`  

It will look on page: 

&rarr; [Next step: Next Page Title](#next-step-recommendations-optional)

# Creating Subpages

If content is too big to place it on one primary page, you can create secondary pages (subpages) and place links there on the primary page.  
Thus, there are:
- primary pages, that user can open from navigation tree
- secondary pages, that user can open from links on primary pages  

Place `secondary-page-name.md` file in the folder `primary-page-name`, where images and downloads for primary page are placed: 
   
![subpages-structure](how-to-create-page/images/subpages-structure.png) 

Create folder `secondary-page-name` to place images and downloads for this subpage.

# Viewing Page In Local Environment

To open page in local environment:
- run Docker
- go to Docker's `Settings > Resources > File Sharing` and add project directory: 
    ![docker-sharing](how-to-create-page/images/docker-sharing.png) 
- in Command Prompt go to project directory 
- run `jekyll.bat` or `jekyll.bat --incremental` for faster processing
- open `localhost:4000` in browser to view project

# Verifying

Read whole page before creating pull request. Verify that all images are shown properly and each link works.  
Check automatic Table of Contents in the beginning of page, if its structure corresponds to content.

&rarr; [Next step: How To Add Page To Documentation Portal](../how-to-add-page-to-doc-portal.md)
