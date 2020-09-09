# boardinfinity

Project URL: 
GET  https://boardinfinityapp.herokuapp.com/api/list
POST https://boardinfinityapp.herokuapp.com/api/add   - can be used only from postman



Steps to deploy in Heroku
=========================
Install the Heroku CLI

Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login

Clone the repository

Use Git to clone boardinfinityapp's source code to your local machine.

$ heroku git:clone -a boardinfinityapp
$ cd boardinfinityapp

Deploy your changes

Make some changes to the code you just cloned and deploy them to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master
