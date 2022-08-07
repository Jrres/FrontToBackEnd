# FrontToBackEnd
An example of why node js is too wild

to use make sure nodejs is installed
In terminal: 
  node -v (my v. v16.15.1) 
next install npm 
  npm install -g npm
Once downloaded start the server 


In json file, the start command is "node server.js" 
to start 
  npm run start 
This will start the express server and route all the client side files 

The code is incomplete because it isnt using a middle ware, 
but this Server to client is simply meant to load static Files
from the front and allow the back to update to the page. 

Issues: 
Without the use of middle ware, EJS modules cannot be accessed by the server.
Therefore, use something like Commonjs, nestjs or async https methods
