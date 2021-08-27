# Angular Workshop - SoftUni Forum 
This application is created as a workshop for the Angular Corse @ Software University

## Task Requirements
The application is a forum, where each registered user can create a theme or post a comment. For now, your task is to check the given skeleton (HTML and CSS files) and split them into components, so each part can be reusable. Be careful when you structure the components.

## MongoDB
Before you start with creating a new project in Angular you need to install MongoDB. After the successful installation your database will be empty, so you can load the provided from us initial data in it as follows: 

    1.	Download the provided folder named "forum".
    2.	In the console write the following command:
    `mongorestore -d forum C:\Users\Name\Desktop\forum`

Note* C:\Users\Name\Desktop\forum – replace with the path of the folder "forum" in your computer!!

## REST API
You are provided also with REST API. To bring life on that API you should first install the dependencies with the command "npm install". After that, type the command "npm start". In order to fetch the themes, you will have to make a GET request on "localhost:3000/api/themes".

## Logged/Unlogged User
NOTE: Because we haven't covered authentication yet (how to login and register), you can hardcode it with a variable.
Logged out users see the Login and Register buttons/links.

## Implementation of the Main Section
After the backend is ready to use, you should fetch all themes and list them on the home page in the format you saw in the skeleton. 
The themes in the main section should be descending sorted by the subscribers. 
Each theme should have a title, date (when the theme is created), the username of the creator, count of the subscribers of the theme. 

## Implementation of the Aside Section
In the Recent posts section, only the 5 latest posts must be shown! (https://localhost:3000/api/posts?limit=5) The posts will be returned from the REST-api sorted by the time of creation. 
Each component should have a title (the title of the theme), a username of the user, whom the last comment in the theme belongs, and the time the post was created.

# PART 2

## Task Requirements
So far, we have created one dynamic page which lists all themes sorted by two different criteria. The next step is to implement few more pages and route between them. You will be provided with HTML and CSS skeleton for all other additional pages that you must create. There is one catch, half of these pages require authentication. You must create some properties or services that fake this authentication. Because we don’t know yet how to manipulate forms properly or the real case with the authentication and authorization. We will fix that later when we have the knowledge to do so.

## Logged in navigation bar
When the "user" is "logged in" he should see the following navigations:

The mini nav-bar includes:

    •	[Username's profile] a-tag should refer to the profile page ("localhost:4200/profile ")
    •	[Logout] a-tag should refer to ("localhost:4200/logout")

The nav-bar below the logo of the SoftUni forum includes:

    •	[Home] a-tag should refer to the home page ("localhost:4200/home")
    •	[Themes] a-tag should refer to the "page with all themes" ("localhost:4200/themes")
    •	[New Theme] a-tag should refer to the "create theme" ("localhost:4200/add-theme")

## Not logged in navigation bar
When the user is "not logged in" he should see the following navigations:

The mini nav-bar includes:

    •	[Login] a-tag should refer to the home page ("localhost:4200/login ")
    •	[Register] a-tag should refer to ("localhost:4200/register")

## Home page (Not Logged in)
This is the home page ("localhost:4200/home"). This is a welcome user page. The welcome component that we have already can be reused here. All "users" can access this page no matter of their authentication. The not logged in user view: Welcome page with buttons for [Login] [Register]

## Home page (Logged in)
Welcome page with buttons [Profile] [Logout]

## Register (Not Logged in)
This is the register page ("localhost:4200/register"). This will be the point of your app that the fake isLoggedIn property can be changed to true. For now, we don’t have a database with user registration. So, make sure each registered user is stored in userService or some other appropriate place. So, each of them can logged in successfully.

## Login (Not Logged in)
This is the login page ("localhost:4200/login"). This will be another one point of your app that the fake isLoggedIn property can be changed to true. For now, we don’t have a database with user registration. So, make sure each registered user is stored in userService or some other appropriate place. Each of them can log in successfully.

## Themes page (Not Logged in)
This is the themes page ("localhost:4200/themes "). This is the page we already have. All "users" can access this page no matter of their authentication. By clicking the title of a theme, you will be redirect to the theme content view. It is described below. There are several differences between the logged and anonymous user. The anonymous user should see the following:

## Themes page (Logged in)
This is the themes page ("localhost:4200/themes ") for logged in users:
Note*: Because you are still not really logged in, you can hardcode this userId ('5fa64b162183ce1728ff371d') in your service, to write your logic for subscribed users (Red and Green buttons).

## Theme comments (Not Logged in)
This is the theme comments page ("localhost:4200/themes/:themeId "), where the user can see all the posts for the selected theme.

## Theme comments (Logged in)
The logged in user can write new comment or like the other user's posts.

## Create New Theme (Logged in only)
This is the create new theme page ("localhost:4200/themes ") where each user (logged in) can create his own theme. 

    •	When "Post" button is clicked, you can try to make "POST" request to ("localhost:4200/themes") with the given theme information. After successful creation, redirect the current "user" to the theme comments page of his new created theme.
    •	When "Cancel" button is clicked, redirect the user to home page.

## Profile (Logged in)
This is the profile page ("localhost:4200/profile"). This page will show the information about the currently logged in user. For now, the data in this page will be static, except if you create more than the fake isLoggedIn property. The "Edit" button will replace the information fields with input fields, but this will be made in the next workshop, when you learn more about handling forms.

## Invalid routes
This is the page for all invalid routes ("localhost:4200/?????? "). Use it if invalid path or wrong one is accessed.

## Protected routes
Make sure all user (logged in) pages are protected. That means if your fake "isLoggedIn" property is false the logged in pages can't be accessed. Create authentication guards.


# PART 3

## Task Requirements
At this point the application has forms. Now it's the time to edit them so the given information is handled properly as expected. Implement the following validation, notification and styling rules for each form.

By default:

    •	The input fields are neutral (neither valid nor invalid). If some of the fields are touched, you should determinate the status of validation from the given data inside it
    •	Each input field is required

Notifications should be shown as paragraph ("<p>") elements below each input field or button. The notification below each button should display the status of the form validation:

    •	If the status is untouched or valid the left border of the input field must be green, else red.
    •	If the status is invalid, use - "You can't continue until you provide a valid data" as text or the default text provided from the skeleton. The color inside that paragraph should be "red" and the button should be disabled.
    •	If the status is valid just remove the notification and enable the button.

Check the examples below each form for more clarity.

## Invalid Cases
In case some of the input fields аrе invalid, the following input field should be styled with class input-error, which has the following style:

    •	"border-left-color: red;"

And notification should be shown with information about the validation. The text inside that paragraph also should be red.

## Valid Cases
When the input field is filled with valid information, the class input-error should be disabled / removed so the left border should be green again.

## Reactive Forms
Use the model driven (reactive) approach to build login and the register form.

## Login
The login form expects as input: email and password.
Valid credentials in this case are:

    •	Email address must have at least 6 symbols, after that the symbol "@" is followed. The valid domain name is only "gmail" again followed by ".". Top level domain can be "bg" or "com".
    o	Valid email addresses: testing@gmail.com, testing@gmail.bg, something.else@gmail.com
    o	Invalid email addresses: qwe@gmail.com, 123@gmail.bg, somethingelse@abv.bg, another@abv.com
    •	Password should be at least 5 symbols as well

## Register
The register form expects as input: username, email, password, repeat password and telephone number (not required).

Username validation here is:

    •	Should have at least 5 symbols and is required.

Email validation here is the same as the login case:

    •	Should have at least 6 symbols, after that the symbol of "@" is followed. The valid domain name is only "gmail" again followed by ".". Top level domain can be "bg" or "com".
        o	Valid email addresses: testing@gmail.com, testing@gmail.bg, something.else@gmail.com
        o	Invalid email addresses: qwe@gmail.com, 123@gmail.bg, somethingelse@abv.bg, another@abv.com

Both passwords should be grouped in "passwords" group. The validation here is:

    •	The given password should be at least 5 characters (any English letter and digits are allowed)
    •	The given repeat password should be the same as the given password

Both fields are considered invalid if some of them do not cover the described validation. If that happens apply the invalid stylization for both. Otherwise the valid stylization is applied.

## Template-driven Forms
Use the template-driven approach to build the create new theme and the change user information form.

## New Theme
The new theme form expects as input: theme name, post text.
Valid data in this case is:

    •	Theme name - should be at least 5 characters
    •	Post text - should be at least 10 characters long

The "Post" button should be disabled if the inputs are NOT valid.

## Change Profile Information
When you are logged in you can see your profile information.

By clicking the "Edit" button, the profile information should be turned into form with editable fields. The input fields should have the current information of the user.

Username validation here is the same as the register case:

    •	Should have at least 5 symbols and is required.

Email validation is the same as the login and register cases:

    •	Should have at least 6 symbols, after that the symbol of "@" is followed. The valid domain name is only "gmail" again followed by ".". Top level domain can be "bg" or "com".
        o	Valid email addresses: testing@gmail.com, testing@gmail.bg, somethingelse@gmail.com
        o	Invalid email addresses: qwe@gmail.com, 123@gmail.bg, somethingelse@abv.bg, another@abv.com

If the validation passes, the "Save" button should be enabled, and the user can make a post request to change the information. 

If the "Cancel" button is clicked all changes must be reverted, and the user information should be displayed unchanged.

## Custom Directives
Think about for a second which logic can be isolated in custom directive so you avoid repeating part of the code.

Hint: Stylization / Validation
