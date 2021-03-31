## Troubleshooting steps

  1. Write down in dialy tasks the steps you will try before based on your best guest
  2. Use a test.html page
      - This way you make changes and get it working without worrying about messing with other code
  3. Test each step
      - if it work emplement it into yoru code
      - if it doesn't work restart on step 1

## Footer

### Nav links without bullets
      - CSS
     
        ```.links{
          list-style-type: none; /* removes bullets */
          margin: 0; /* removes margins */
          padding: 0; /* removes padding */
          text-decoration: none;
          color: inherit;
        } ```
        
      - HTML
         
         ```<div class="col border" >
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
        </div>```
        
  
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
  


