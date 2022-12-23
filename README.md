## EklipsTestTask
Technical task for Eklips Digital using Vanilla Javascrip, CSS(Sass) and HTML.

The repo has been deploy using Vercel tool and it can be seen here - https://eklips-test-task-qj2qzgken-rodz13.vercel.app/


### How to run
    - Dev - `npm run dev run` - locally - http://localhost:3000/
    - Compile CSS - `npm run complie` - it will watch for any changes in the CSS
    - Build webpack - `npm run build` or `npm run build:watch` to watch webpack changes


## Things to consider
 - The design might be slightly different than the one presented in figma. The Figma file was built in blocks and some of the components are grouped  together making it difficult to understand its dimentions.
 - Images were downloaded from Figma file however the quality was not the best and therefore it is presented in lower resolution
 - File structure was divided in project folder:
    - project root
        - dist
        - node_modules
        - public
        - package-lock.json, READ.md, server.js, style.scss, webpack

 - Icons - usually projects use icons from a database or some sort of internal libraries. For this project some icons were taken from and some were imported as svg from the figma file, however, the general ideia is to have a default pattern.
 - Class names - the class names in this project is very basic - for example, nav, header, cards, mini-cards, middle, bottom and footer.
 - I was not sure how much Javascript is used in your projects so part of the project creates the cards based on data and the other part is hardcoded in the html.
 