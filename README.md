Project created by:  
  
[![Github](https://img.shields.io/badge/GitHub-Anthony_Griffith-100000?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://github.com/AnthonyGriffith) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Anthony_Griffith-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=101010)](https://www.linkedin.com/in/anthony-griffith/)

# Clothy
Cool fullstack (**PERN**) react project to use multiple topics learnt, such as **google client authentification**, Navigation with **React Router**, form creation with **React Hooks Form**, state managment with **React-Redux**, API calls to a **Nodejs backend server** that uses a **postgres database** to store and fetch data, and all this with a nice looking and completely **responsive** design! 

## Website overview
Basically the idea of the application is to administrate multiple items that are being selled in a website, at the moment every user that is signed in can create, delete and edit all items of the website, meanwhile an unsigned user can only see the content. 
<p align='center'>
<img src="https://user-images.githubusercontent.com/58449215/148701103-6796c341-a310-4270-bfcc-ade49bc65ee9.png" width="900">  
</p>

### User authentification
The first important aspect of the application is that it allows user to sign in in order to modify the website. So the difference would look like this:

 <p align="center">
 <img src="https://user-images.githubusercontent.com/58449215/148701742-79e18a41-00ef-46c4-9ba1-814df7eaaed2.png" width="900">
 </p>
 
### Adding and editing items
Signed users can add and edit items with the following forms:  
<p align="center"> 
 <img src="https://user-images.githubusercontent.com/58449215/148701972-5041598c-d139-4add-9e91-578299e304e1.png" width="800">
</p>

### Item options
The signed user can perform different actions with the items that are on the website with the following buttons:
<p align='center'>
<img src="https://user-images.githubusercontent.com/58449215/148702344-7e5abfbd-c0bf-4300-9c34-5769e9ae789d.png" width="500">
</p>

### Navigation
The user can navigate from all items, to available and bought by clicking these header options:
<p align='center'>
<img src="https://user-images.githubusercontent.com/58449215/148702516-276ca2df-75c3-4993-a718-bc9f6350c7ea.png" width="500">
</p>

### Pagination
The user is able to navigate throw all the cloths easily with the pagination buttons, which allows the user to increase or decrease the page by 1 or digit the specific page he wants into the middle number input.
<p align='center'>
<img src="https://user-images.githubusercontent.com/58449215/148702600-30260c3d-0bb3-4aa9-a037-4aa148420395.png" width="500">
</p>

### Full responsive
The user is able to use the website in all kind of devices, including tablets, smartphones and PCs.
<p align='center'>
  <img src="https://user-images.githubusercontent.com/58449215/148703565-6ac4ed8e-d282-4b2d-835a-19a9c7fc7c11.gif" width="500">
</p>

## Technologies used
<a href="#" target="_blank"> <img src="https://img.icons8.com/color/48/000000/html-5.png"/> </a>
<a href="#" target="_blank"> <img src="https://img.icons8.com/color/48/000000/css3.png"/> </a>
<a href="#" target="_blank"> <img src="https://img.icons8.com/color/48/000000/javascript.png"/></a> 
<a href="#" target="_blank"> <img src="https://img.icons8.com/color/48/000000/redux.png"/> </a>
<a href="#" target="_blank"> <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"/></a> 
<a href="#" target="_blank"> <img src="https://img.icons8.com/color/48/000000/postgreesql.png"/> </a>
<a href="#" target="_blank"> <img src="https://img.icons8.com/color/48/000000/nodejs.png"/> </a>

## External APIs
In order to host images I used the free Imgbb API, which can be found here: https://api.imgbb.com



## How to run?
You can try the hosted website here https://clothy-web-app.herokuapp.com or follow the next steps:
 1. Install the required packages with
```
npm install
```
2. Setup your keys in the following file:
```
src/config.js
```
3. Clone the backend repo and start it by following the instructions here: 
```
https://github.com/AnthonyGriffith/Clothy-Backend/blob/main/README.md
```
4. Run the project with:  
```
npm start
```
