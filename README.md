### **Lesson 1: Images **

#### **Objective:**

Students will enhance the user information table project by incorporating various media elements, including images and captions. They will use the `<img>`, `<figure>`, and `<figcaption>` tags to create a visually rich presentation of user profiles.

---

### **Step-by-Step Guide**

1. **Set Up Your New Project (if not done already):**

   - Inside of the `student-code` folder, create a new folder called `images`. Search online for 3 headshots and save the user profile images `user1.jpg`, `user2.jpg`, and `user3.jpg` inside the `images` folder.

2. **Update the HTML Structure to Include Image Elements:**

   - Open the `tables.html` file and update the table to include a new column for profile images. Add a `<th>` for "Profile Image" in the `<thead>` and update the `<tbody>` to include `<td>` elements for the images:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>User Information Table</title>
     </head>
     <body>
       <h2>User Information Table</h2>

       <table>
         <thead>
           <tr>
             <th>Profile Image</th>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Gender</th>
             <th>Country</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>
               <figure>
                 <img src="images/user1.jpg" alt="John's Profile" />
                 <figcaption>John Doe</figcaption>
               </figure>
             </td>
             <td>John</td>
             <td>Doe</td>
             <td>Male</td>
             <td>United States</td>
           </tr>
           <tr>
             <td>
               <figure>
                 <img src="images/user2.jpg" alt="Jane's Profile" />
                 <figcaption>Jane Smith</figcaption>
               </figure>
             </td>
             <td>Jane</td>
             <td>Smith</td>
             <td>Female</td>
             <td>Canada</td>
           </tr>
           <tr>
             <td>
               <figure>
                 <img src="images/user3.jpg" alt="Alex's Profile" />
                 <figcaption>Alex Johnson</figcaption>
               </figure>
             </td>
             <td>Alex</td>
             <td>Johnson</td>
             <td>Non-Binary</td>
             <td>United Kingdom</td>
           </tr>
         </tbody>
       </table>
     </body>
   </html>
   ```

3. **Save and Preview Your Work:**
   - Save the `index.html` file.
   - Open the file in a browser and verify that the table displays correctly, with data properly formatted in rows and columns, including the images and captions.

---

### **Assessment Criteria:**

1. **Correct Use of Media Elements:**

   - The table includes images in the first column, using appropriate use of the `<img>`, `<figure>`, and `<figcaption>` tags.

2. **Proper Data Display:**

   - The user information, including names and corresponding media elements, is displayed correctly in the table.

3. **File Organization:**
   - The project folder includes the `images` folder with user images and the `index.html` file that is correctly updated.
