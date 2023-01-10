# FetchFrontEndExercise

## Running the project

Run `ng serve`. Unless another port is specified, the web-app will be running at `http://localhost:4200/`.

## Design 

The website is fully mobile and tablet responsible. It also incorporates the Fetch logo and colors.  

## Function 

The form requires that all fields be filled before submission. If there are any errors in the form such as an invalid email, a popup message notifies the user to fix the error before proceeding. Passwords are required to be at least 8 characters long, with at least one letter, one number, and one special character.

## Service
The website does a `GET` call to `https://frontend-take-home.fetchrewards.com/form` to get the `occupations` and `states` lists, which are then displayed to the user as options in select dropdowns.

Upon clicking `Submit`, (and if the form values are valid) the website will make a `POST` request to the same endpoint as above and provide the form value as a User object in the body. 

Upon valid submission, there will be a success message below the `Submit` button. To trigger a failure message, you can change the value of the `name` attribute in any of the inputs in the login.component.html file. Ex: Change `name="name"` to `name="fullname"` in the `name` input tag. Submission will cause a 400 error and display the failure message in the html.
