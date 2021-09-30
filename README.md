# Django-React-Firebase-E-Shop

This project is a group project during my bootcamp experience

![alt text](https://github.com/dimitrisgiannak/React-Django-Firebase-E_shop/blob/main/project_img/homepage.png)

# Features

* Shopping cart
* Product reviews 
* Rating 
* Search bar with autocomplete
* User profile with orders
* Change your profile credencials
* Paypal integration
* Chatroom with Firebase

# Download & Setup Instructions

* Clone project: git clone [https://github.com/dimitrisgiannak/React-Django-Firebase-E_shop/]
* cd groupREVISED
* Create virtual environment: virtualenv myenv
* myenv\scripts\activate
* pip install django
* pip install djangorestframework
* pip install django-filter
* pip install django-cors-headers
* pip install djangorestframework-simplejwt
* pip install Pillow
* cd backend
* python manage.py runserver

# Install react modules

* cd frontend 
* npm install
* npm start

# Firebase create api

* Try to create your own account and database and replace credentials in frontend>src>firebase.js>firebaseApp. Otherwise after some time message limit wont let you send any more messages.(optional)

# To do :

* add proper admin panel other than the default from django superuser
* remove inline css
* sign in to firebase chat when user logs in so his name will be displayed while sending a message
* add htmlonly cookie so that we wont store valuable info on localstorage
