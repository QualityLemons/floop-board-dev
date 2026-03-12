Hi, welcome to Floop!, an activity feedback app from QualityLemons. I have not been a programmer for long, but I have been a business development manager, grant manager, and community activity designer for many years. I hold a level 3 in adult education and training from Dudley College. I am excited to use the skills I am learning to create a simple tool that could eventually be used to create meaningful and simple feedback loops for various activities in the community, including class engagement.

The app aims to create the conditions for active participation and participant submission response with js scripting to support emoticon reactions 

You can review the wireframe page directly from the index page to understand my design intent. Https://qualitylemons.github.io/floop-board-dev/wireframe.html


You can access Floop! as a public page here: 

Floop! as an MVP removes email requirement entirely and feed all images to a separate page where they can be stored and reviewed against postcode data. 
<div>
It was built using HTML, CSS, Javascript, with APIs from Google Sheets and EmailJS.
https://www.emailjs.com
https://developers.google.com/workspace/sheets/api/guides/concepts
</div>
I would like to thank Laurents Marker for his integral support to verbally dialog the architecture of this web application. I am grateful to men at the Dudley Ex-Servicemen Club for their patience in looking at a web app and giving their feedback to the design in situ. I will be showcasing this simple app at my workshop series ("Hard Games") at the Rik Mayall Comedy Festival in May and June 2026 and will use feedback there to further grow and progress the app design. 
<div>
This app is simple for a very good reason: most feedback processes in youth and adult activities are too complex to be fully understood by practitioners. Most practitioners blame participants for not getting feedback. However, illiteracy goes both ways. The reason why short attention spans and failure to follow through exist are fully the result of poor design decisions which are often created in a silo instead of actively working on the basis of feedback in the design process. 
</div>
The result of this is that participants may be appropriately onboarded, but only a small number may be fully followed through the life of the activity. This means a greater likelihood of bias, including favouritism (when only the most friendly participants are sought for responses); creaming (when only the most capable are); and parking (when the least capable are put into low-grade activities where their feedback is not actively cultivated.) When asked, most activity practitioners will deny these biases exist. Only by reviewing data in actuality can we expect to find out whether practitioners are using the entire participant pool to gather data. 

It is important to think about your response process as part of the general and specific user experience. Cultivating awareness and understanding of feedback loops early in the process, including creating links where individuals (including parents and carers) can review feedback processes, can help remove barriers, encourage and motivate active feedback participation. Feedback should be available at any time. In fact, when participant provide streams of feedback responses over the course of an activity period, it creates the basis for rich rewards for current and future activity co-design. 

I am still working out the kinks for inputting in the canvas on mobile devices. For now, please try to use a computer or tablet to participate with inputting for this project. 


DEPLOYMENT PROCEDURE

Floop! Deployment Procedure

This guide explains how to deploy the Floop! feedback system from scratch.
1. Database Setup (Google Sheets)

    Create a New Sheet: Go to sheets.new.

    Configure Tab 1 (Drawings): Rename the first tab to Sheet1. In the first row, create these headers:

        Timestamp | user_email | user_postcode | my_image_data

    Configure Tab 2 (Reactions): Create a second tab and rename it exactly to Reactions. In the first row, create these headers:

        Timestamp | entryId | emotion

2. Backend API Setup (Google Apps Script)

    In your Google Sheet, go to Extensions > Apps Script.

    Delete any code in the editor and paste the doGet(e) and doPost(e) functions.

    Deploy the Script:

        Click Deploy > New Deployment.

        Select Type: Web App.

        Description: Floop API v1.

        Execute as: Me.

        Who has access: Anyone.

    Authorize: Click "Deploy," then "Authorize access." Follow the Google prompts (click Advanced > Go to Floop (unsafe) if warned).

    Copy URL: Copy the Web App URL provided. You will need this for your HTML files.

3. Frontend Configuration

    Update scriptURL: * Open index.html and gallery.html.

        Find the variable const scriptURL = '...'.

        Paste your Web App URL into the quotes.

    Verify Links: Ensure index.html, gallery.html, readme.html, and wireframe.html are all in the same root folder.

4. Hosting the Website

Since this is a client-side application, you can use any static hosting service:

    GitHub Pages (Recommended): 1.  Push your code to a GitHub repository.
    2.  Go to Settings > Pages.
    3.  Select the main branch and click Save.

    Netlify / Vercel: 1.  Drag and drop your project folder onto their "Deploy" dashboard.

5. Post-Deployment Testing

    Submission Test: Open your live site, draw a test image, and click "Submit." Verify it redirects to the Gallery.

    Database Check: Open your Google Sheet to see if the row appeared in Sheet1.

    Reaction Test: Click a reaction emoji in the Gallery. Check the Reactions tab in the Google Sheet to ensure the vote was counted.

Troubleshooting Common Issues

    CORS Error / Loading Hang: Ensure you selected "Anyone" (not "Anyone with a Google Account") during deployment.

    404 Error: Ensure the scriptURL in your code includes the /exec at the end.

    Missing Images: Double-check that your Sheet headers match the JavaScript variables exactly.