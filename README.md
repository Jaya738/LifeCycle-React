# Life Cycle of Silkworm

Installing ReactJS and creating your first application

To install and use ReactJS, we need two main dependencies: Node.js and NPM. Node.js is a Javascript run-time environment that allow us to execute Javascript code like if we were working on a server. 
NOTE: That every web application is meant to be executed in a server if we work on computers.
And second is NPM is a package manager for Javascript, that is, NPM allows us to install Javascript libraries.

Now we are going to see how to install react js 

These instructions are for Linux systems.

Step:1 

First, we need a tool called curl, if you don’t have it, you can install it typing the following command in a terminal:

sudo apt-get install curl

You are going to be prompt to enter your user password to grant sudo access. After the installation is finished, now let’s install Node by typing the following command:

Step:2

 curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

I’m going to install Node.js v6 LTS Version. If you want, you can install the newest version (v8) by replacing setup_6.x for setup_8.x. Either version will work fine.

Step:3 The command you just type added the Node.js to your repository list, now, let’s install Node.js by typing:

sudo apt-get install -y nodejs

Step:4  If everything is alright, you can check that Node.js and NPM are installed (NPM is included with Node.js) by typing node -v and npm -v, and you should see something like this:



   $ node -v

v6.11.1
 
  $ npm -v

3.10.10
Step:5  Also, let’s install build-essential package, which is needed for Node to work properly:
sudo apt-get install -y build-essential
Step:6 Now, let’s install React by typing:
sudo npm install -g create-react-app

create-react-app is a package that we can find in NPM and that will make our task easier. It takes care of every configuration. We only need to use it. Now that we have create-react-app installed,


Step:7 let’s create our first app by typing:
create-react-app hello-world

 Step:8 After it finishes creating and setting up the application, we should move into the directory that was just created and that is named like our application by typing cd hello-worl. 
I have created  hello-world, yours can be anything you want. After a few seconds, a message will appear saying that our application was created successfully, and gives us a few instructions. 
Step:9 
npm start
This command will start a local server and will open our application in the browser, just like this:

Now we are moving to install the app and going to work on the app . so here we already build an app named as water cycle.so to acess the app and to work on follow the steps as mentoned below:



* We install React by typing:
npm install -g create-react-app
create-react-app is a package that we can find in NPM and that will make our
task easier. It takes care of every configuration. We only need to use it. Now
that we have create-react-app installed,
** We create our app by typing:
create-react-app appname
*** After it finishes creating and setting up the application, we should move
into the directory that was just created and that is named like our application
by typing
cd directory name
For entering into react js we use npm start 
This command will start a local server and will open our application
if not,
Then open http://localhost:3000/ to see your app. The initial structure of your app is setup.
Reactstrap installation:
*Install reactstrap and Bootstrap from NPM. Reactstrap does not include Bootstrap CSS so this needs to be installed as well:

npm install --save bootstrap
npm install --save reactstrap react react-dom

Import Bootstrap CSS in the src/index.js file:

import 'bootstrap/dist/css/bootstrap.css';

Import required reactstrap components within src/App.js file or your custom component files:

import { Button } from 'reactstrap';
Now you are ready to use the imported reactstrap components within your component hierarchy defined in the render method. 
Here is an example App.js redone using reactstrap.
CDN
Reactstrap can be included directly in your application's bundle or excluded during compilation and linked directly to a CDN.
https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js
Note: When using the external CDN library, be sure to include the required dependencies as necessary prior to the Reactstrap library:

# Install react grid system
npm install react-grid-system --save

import { Container, Row, Col } from 'react-grid-system';

<Container>
  <Row>
    <Col sm={4}>
      One of three columns
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
  </Row>
</Container>

import { Button, ButtonGroup, ButtonToolbar} from 'reactstrap';
<ButtonToolbar>
  <ButtonGroup>
            <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
</ButtonToolbar>

For component's size variations:
xs (for phones - screens less than 768px wide)
sm (for tablets - screens equal to or greater than 768px wide)
md (for small laptops - screens equal to or greater than 992px wide)
lg (for laptops and desktops - screens equal to or greater than 1200px wide)

﻿To install a package and save:
-->npm install packagename --save (if already installed new version will be updated)
-->npm uninstall (to remove a package)
render method should be written in class 
function state or function component

For react scroll cards:
https://www.npmjs.com/package/react-perfect-scrollbar

To install scrollbar:
npm install react-perfect-scrollbar -S
then
 Import the css file if you have loader for css files:
import 'react-perfect-scrollbar/dist/css/styles.css';
Import the module in the place you want to use:
    import PerfectScrollbar from 'react-perfect-scrollbar'
Wrap you content in this component:
    <PerfectScrollbar>
        ... SCROLLBAR CONTENT HERE ...
    </PerfectScrollbar>

To add images:
First we have to import the images into the component where we have to use them
import imgname from './imagename.png';
It's syntax is:
<img src={imgname} style={{height:"100px",width:"100px",padding:"10px"}}/>

To create GIF's use the following link:
https://imgflip.com/gif-maker

Inorder to trace the outlines of the image ,we use Inkscape as follows:
* Open Inkscape
* import image you want to trace 
* go to path
* trace bitmap
* brightness cuttoff 
* update 
* ok
* link https://www.wikihow.com/Trace-an-Image-Using-Inkscape










