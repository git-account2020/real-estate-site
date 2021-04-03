## Troubleshooting steps

  1. Write down in dialy tasks the steps you will try before based on your best guest
  2. Use a test.html page
      - This way you make changes and get it working without worrying about messing with other code
  3. Test each step
      - if it work emplement it into yoru code
      - if it doesn't work restart on step 1

## How I found answers
- Responsive columns
  - Looked at the templates or site I was copying and inspected the column element and it showed me how they did it

## Chrome dev tools

### Computed Tab
This shows the actual resolved css as it is rendered on the page

### Style Tab
This shows the css as it was written

## Footer



### Sticky footer (CSS)
- HTML
  - Add .sticky-footer to footer element
- CSS
 ```css
{
  body{
    min-height: 100vh; 
    /* make the minimum height of the body 100% of the whole screen */
  }

  .sticky-footer{
  position: sticky; 
  /* positions object to stay in place regardless of scrolling */

  top: 100%; 
  /* Threshold so that 100% of the view port must be between the top of the class before it becomes sticky */
  }
}
```
### Nav links without bullets
- CSS

  ```css

  .links{
    list-style-type: none; /* removes bullets */
    margin: 0; /* removes margins */
    padding: 0; /* removes padding */
    text-decoration: none;
    color: inherit;
  } 
  ```
  
- HTML
    
    ```html
    <div class="col border" >
    <h3 class="border">About Us</h3>
    <ul class="links border" >
      <li>
        <a href="#">Company</a>
      </li>
      <li>
        <a href="#">Team</a>
      </li>
      <li>
        <a href="#">Career</a>
      </li>
      <li>
        <a href="#">Graphic Design</a>
      </li>
      <li>
        <a href="#">Documentation</a>
      </li>
    </ul>
  </div>
  ```
  
  
### Search bar
- Pill shape
  - rounded-pill
- Move placeholder
  - add padding left, right, ect
- Increase height of search 
  - increase padding or use padding-top and padding-bottom

### Social media icons
- Use icon from font awesome, bootstrap, etc
- Changing colors
    - icon = color:white
    - background = backround-color: #hex of social media icon
- Background 
    - Make it a circle
        - Use rounded-circle (bootsrap) or border-radius: 50% (css)
    - Make circle bigger
        - Add padding 
    - Hover effect
        - Add .className:hover{opacity:0.5} in css below the class name with the rest of the css for the that specific icon

### Outline showng while clicking on rounded pill search

```css
  *{
    outline:none;
  } 
  ```

### Responsive columns

By defining the number of columns for each break point and giving that amount to all of the columns I can have the break points show how ever many columns I want. 
Ex: 
```html
<div class="col-12 col-sm-6 col-lg-3 mt-sm-0 ">
```
### What does .col-md mean?
```html
  <div class="col-md"> 
    <!-- columns will be veritically stacked until it hits medium viewport -->
```

### Find font family
- Use dev tools arrow button

### Find font weight
- Use dev tools computed tab

### Import google fonts
 - You can use the @import option to import the font into the css directly instead of in the link. This helps with abstraction because you can import the font for the specific section of css you want directly on that page. 

1. Find the font
2. Choose the font
3. Choose the @import option ( on the side at time of writing)
4. Copy the code inside the style tag 
5. Paste the code in the specific css file where it will be used
6. Copy the font-family css code
7. Paste the code in the css file inside the element, class, or id you will be using on

### Margins (large) on the side of footer
- Changed the footer to .container this automatically gave it large margins on the side

### Margin too much at top of screen
- Useful links column had too much margin at smaller or medium size . Fixed by remove mt-5 because at xs-md it doesn't need any extra margin because its already at the top of screen like about
