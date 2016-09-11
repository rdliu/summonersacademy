# summonersacademy

## Setup for Windows

###Setup App 

1. Install nodejs on your machine. For windows:

https://nodejs.org/dist/v4.5.0/node-v4.5.0-x64.msi

2. Clone the repository.
3. In the cloned repository, run npm install.

ALTERNATIVELY, If you want to create a new NodeJS project.

1.  Run npm install -g express-generator
2.  Run express <NAME_OF_PROJECT_GOES_HERE>,

###Setup Mongodb

Follow directions here:
http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/

But for synposis:

1. Install Mongodb:

https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.2.9-signed.msi/download

2.  Add Mongo exe files into your Path environment variable. Default install location is:

C:\Program Files\MongoDB\Server\3.2\bin

3. Make a data folder named data in your root directory of your project

4. Run mongodb to connect to the data directory (this tells mongo where to put all the data).
mongod --dbpath c:\<path_to_project>\data\

5. Connect to mongo using the command line and add data as you see fit.
mongo

###To run the app
1. go to your project directory and run npm start.
2. go to http://localhost:3000.
