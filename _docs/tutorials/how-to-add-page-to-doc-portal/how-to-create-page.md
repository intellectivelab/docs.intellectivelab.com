---
title: How To Create Page
layout: docs
category: Unity 7
---
This is a guide how to create page for github documentation site using Markdown syntax. If you know Markdown syntax, start from [Markdown file structure and page structure](how-to-create-page.md#markdown-file-structure-and-page-structure).  

# Markdown Syntax 

## Headings 

To create a heading, add number signs (#) in front of a word or phrase:   
```
# Heading Level 1  
## Heading level 2  
### Heading level 3  
```
Heading Level 1 is the biggest. 
Don't forget type a space between `#` and `Heading`. 

## Paragraphs 

To create paragraphs, use a blank line between text lines. Don't put tabs or spaces in front of your paragraphs.  
```
This is the first paragraph of text.

This is the second paragraph of text.
```

## Line breaks 

To create a line break, end a line with two or more spaces, and then press `Enter`.  
Next text will be on the next line. 
```
This is the first line of paragraph.  
This is the second line of paragraph. 
```

## Lists 

To organize items in unordered list, type: 
```
- First item  
- Second item  
- Third item 
``` 
It will look on page:  
- First item
- Second item
- Third item  

To organize items in ordered list, type:
``` 
1. First item
2. Second item
3. Third item 
```

It will look on page: 
1. First item
2. Second item
3. Third item 

## Links 

To create a link, type: 
```
[Title of link](url)
```
It will look on page:  
[Title of link](#links) 

## Images 

To insert an image, type: 
```
![Title of image](url)
``` 

## Code and code blocks 

To denote a word or phrase as code, enclose it in backticks (`):

```
`code word` 
```

It will look on page: 

`code word` 

To create code block, use three backticks (```) on the lines before and after the code block: 

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

Many Markdown processors support syntax highlighting for fenced code blocks. 
To highlight code, add `json` just after three backticks before the code block: 

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Tables 

To create a table, type: 
```
| Column 1     | Column 2     |
| ------------ | ------------ |
| cell content | cell content |
| cell content | cell content |
```
It will look on page: 

| Column 1     | Column 2     |
| ------------ | ------------ |
| cell content | cell content |
| cell content | cell content | 

To align columns to the left or right edge, or center add `:` sign: 
```
| Column 1             | Column 2          | Column 3        |
| :------------------- | :---------------: | --------------: |
| left                 | centered          | right           |
| alignment            | alignment         | alignment       |
```
It will look on page: 

| Column 1             | Column 2          | Column 3        |
| :------------------- | :---------------: | --------------: |
| left                 | centered          | right           |
| alignment            | alignment         | alignment       |

You can add links, code (words or phrases in backticks (`) only, not code blocks), and emphasis.
You can’t add headings, blockquotes, lists, horizontal rules, images, or HTML tags.  
Use [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables) to create tables. 

## Emphasis 

To **bold** text, add two asterisks before and after word or phrase: `**bold**`

## Blockquotes 

To create a blockquote, add a > in front of a paragraph: 

```
> This is a citation from another document  
```
It will look on page: 

> This is a citation from another document  


For additional information about Markdown syntax see:  
- [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)  
- [https://www.markdownguide.org/extended-syntax/](https://www.markdownguide.org/extended-syntax/)

# Markdown file structure and page structure 

## Metadata in the beginning of .md file 

```
---
title: New Page Template
layout: docs
category: Unity 7
---
```
This information is not visible on site page, but required to properly embed page in the site. Start page text just below metadata, without empty rows.  

## Title of page 
 
Don't type title of page as a header in markdown file. It will appear on page automatically from metadata above.   

## Table of contents 

Table of contents is created automatically from headers on page. It is important to headline chapters and subitems accordingly to their hierarchy.  

## Content of page  

### Text 

Use `# Heading Level 1` with all capital letters to write titles of chapters. The first heading on page should be `# Heading`, otherwise automatic ToC might work incorrectly.    

Use `## Heading level 2`, `### Heading level 3` and `#### Heading level 4` with only first capital letter to write subchapters.  

Use proper order for heading levels. Do not place `### Heading level` under `# Heading Level`.

| **Note:** All headings must be different, then they might be anchors for links.  

Use backticks (`) to write: 
- commands and messages in Command Prompt: `cd C:\DockerUnity\`, `Login Succeeded` 
- names and paths to directories and files: `C:/DockerUnity` 
- paths to sections: `Resources > File sharing` 
- buttons: `Apply` button 
- boolean operators: `AND`,`OR`  

Bold text is automatically used in tables for column titles. 
Also use bold text to title parts of text like **Problem** and **Solution** in Troubleshooting chapter  

To emphasize important notes, type `| **Note:** plain text of note`. 
It will look on page:  

| **Note:** plain text of note  

Use blockquotes to write quotes from an external sources.

Use plain text for the rest of content.  

### Lists using 

Unordered lists are preferable. Use ordered lists if only it is necessary to count items. 

### Code blocks using 

Use simple and highlighted code blocks with `json`, `xml` or `java` tags. 

### Images and screenshots requirements 

- Preferable image format is .png 
- Do not scale or compressed images, use actual pixel size
- Crop screenshots accurately 
- Screenshots to illustrate process steps should have the same size 
- For highlighting use red frames, red color is R220 G56 B64 (#dc3840):  
	![highlight](how-to-create-page/images/image10.png) 
- Use `:` after the text before image if the image illustrates this text 
- Keep empty row before and after image row
- To align left edge of the image with text in list, use `tab` before `![Title of image](url)`

Optional: Most images look better when adding a grey 1px border, grey color is R167 G167 B167 (#a7a7a7). 
Some images like schemes or diagrams on white background don't need any border. 

Images should be placed to `name-of-your-md-file/images/` folder:

![files-structure](how-to-create-page/images/files-structure.png) 
  
To insert image into page use `![image-title](name-of-your-md-file/images/name-of-image.png)` 

To insert a clickable image preview into page use `[![image-title](name-of-your-md-file/images/name-of-image-preview.png)](name-of-your-md-file/images/name-of-fullsize-image.png)`

### Links to pages 

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

#### Downloads

If user should download file from your page, for example `config.xml` for tutorial, place it in `name-of-your-md-file/downloads/` folder.  
Make sure this file doesn't contain any confidential information like passwords etc.

### Tables using 

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

# Creating subpages

If content is too big to place it on one primary page, you can create secondary pages (subpages) and place links there on the primary page.  
Thus, there are:
- primary pages, that user can open from navigation tree
- secondary pages, that user can open from links on primary pages  

Place `secondary-page-name.md` file in the folder `primary-page-name`, where images and downloads for primary page are placed: 
   
![subpages-structure](how-to-create-page/images/subpages-structure.png) 

Create folder `secondary-page-name` to place images and downloads for this subpage.

# Viewing page in local environment

To open page in local environment:
- run Docker
- go to Docker's `Settings > Resources > File Sharing` and add project directory: 
    ![docker-sharing](how-to-create-page/images/docker-sharing.png) 
- in Command Prompt go to project directory 
- run `jekyll.bat` or `jekyll.bat --incremental` for faster processing
- open `localhost:4000` in browser to view project

# Verifying

Read whole page before publishing. Verify that all images are shown properly and each link works.  
Check automatic Table of Contents in the beginning of page, that its structure corresponds to content.




