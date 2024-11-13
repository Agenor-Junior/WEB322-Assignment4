# WEB322 - Assignment 4

**Assessment Weight**: 9% of final course grade

## Objective
Build upon the code created in Assignment 3 by incorporating the Handlebars view engine to render JSON data visually in the browser using `.hbs` views and layouts. Additionally, update the `store-service` module to support extra functionality.

> **Note**: If you couldn’t complete Assignment 3, contact your professor to request a clean version of the files to start from, without any custom CSS or text added.

## Instructions

### Part 1: Setting Up Express Handlebars and Updating Views

1. **Install & Configure express-handlebars**
   - Use npm to install the `express-handlebars` module.
   - Update your `server.js` file to use `express-handlebars` as the view engine.

2. **Create the Default Layout and Refactor `about.html` to `.hbs`**
   - Create `main.hbs` in the `layouts` directory, copy the content from `about.html` to it, and make the necessary adjustments.
   - Rename `about.html` to `about.hbs` and configure the route.

3. **Update the `addPost` File to Use `.hbs`**
   - Rename `addPost.html` to `addPost.hbs` and update it as instructed to work with Handlebars.

4. **Fix the Navbar to Show the Active Item**
   - Use a helper function to dynamically apply the `active` class to the navbar item of the current page.

### Part 2: Updating the Items Route and Adding a View

1. **Create a Simple “Items” List**
   - Add `items.hbs` in the `views` directory and set up the view to display a list of items.

2. **Build a Table and Display Error Messages**
   - Update `items.hbs` to render data in a table with the following columns: Item ID, Title, Post Date, Price, Category, and Published.

### Part 3: Updating the Categories Route and Adding a View

1. **Create a Simple “Categories” List**
   - Add `categories.hbs` to display category IDs and names.

2. **Build a Table and Display Error Messages**
   - Configure the table in `categories.hbs` to display categories, with links to filter items by category.

### Part 4: Updating the Store Route and Adding a View

- Implement functionality to display filtered items by category and update the `store-service.js` module to include `getPublishedItemsByCategory`.

### Part 5: Adding the Shop/:id Route

- Add a new route to display a specific item by its ID, similar to the `/shop` route.

### Part 6: Final Updates (Post Date, Redirect to /shop & 404.hbs)

- Update the `addItem` method to correctly set the `postDate` field. Create a custom `404.hbs` page to keep the navbar visible on 404 errors.

### Part 7: Pushing to GitHub and Deploying to Cyclic

1. Ensure your latest code is committed and pushed to your private `web322-app` GitHub repository.
2. If configured correctly from Assignment 2, it will deploy automatically to Cyclic. Follow the Cyclic Guide on web322.ca if there are any issues.

## Submission

1. Add the declaration at the top of your `server.js` file as specified.
2. Zip your `web322-app` folder and submit it on My.Seneca under **Assignments -> Assignment 4**.

> **Important**: The assignment must run locally. Start-up errors will result in a grade of zero.
