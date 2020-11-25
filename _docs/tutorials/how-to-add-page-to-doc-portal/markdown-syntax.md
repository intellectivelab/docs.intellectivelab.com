---
title: Markdown Syntax
layout: docs
category: Unity 7
---
A markdown file `file-name.md` contains a text in Markdown markup language. For creating documentation use basic Markdown syntax described below.
Use any text editor to create and edit markdown files.

# Headings 

To create a heading, add number signs (#) in front of a word or phrase:   
```
# Heading Level 1  
## Heading level 2  
### Heading level 3  
```
Heading Level 1 is the biggest. 
Don't forget type a space between `#` and `Heading`. 

# Paragraphs 

To create paragraphs, use a blank line between text lines. Don't put tabs or spaces in front of your paragraphs.  
```
This is the first paragraph of text.

This is the second paragraph of text.
```

# Line Breaks 

To create a line break, end a line with two or more spaces, and then press `Enter`.  
Next text will be on the next line. 
```
This is the first line of paragraph.  
This is the second line of paragraph. 
```

# Lists 

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

# Links 

To create a link, type: 
```
[Title of link](url)
```
It will look on page:  
[Title of link](#links) 

# Images 

To insert an image, type: 
```
![Title of image](url)
``` 

# Code And Code Blocks 

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

# Tables 

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

# Emphasis 

To **bold** text, add two asterisks before and after word or phrase: `**bold**`

For additional information about Markdown syntax see:  
- [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)  
- [https://www.markdownguide.org/extended-syntax/](https://www.markdownguide.org/extended-syntax/)

&rarr; [Next step: How To Create Page](how-to-create-page.md)
