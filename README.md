# illuminati
Team "Illuminati" with members- Deepak Senapati, NVS Abhishek, Ramakrishna Pattnaik


### Project Title
**Pregnancy awareness application**

### Project Description
This web-app focuses on the healthcare of rural women where immediate medical help might be hard to avail.
The app provides a platform in which a pregnant woman, far off from any hospital, in case of any medical complications can press the notify button that would send a distress signal to the nerby ASHA and Anganwadi workers, who can provide basic medical assistance until a ambulance arrives or the patient is taken to the hospital.
There are some additional features on the app, like- it reminds the pregnant to take any vaccine or the nutrition requirements in any month of pregnancy. It also generates notification after childbirth for the vaccinations that should be given to a child upto 10 Years of age.

### Roles & Responsibilities
* Deepak Senapati - Front-end
* Ramakrishna Pattnaik - Back-end and styling
* NVS Abhishek - Back-end and styling

## Installation
 
 Your machine should have NPM , Node , MongoDB and Bower installed. 
A full guide for installing each of these is given below. 
Before you install any packages, ensure your package list is up to date with:
```sh
$ sudo apt-get update
```
##### Install npm
```sh
$ sudo apt-get install -y npm
```
##### Install node
```sh
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n stable
```
##### Install Bower
```sh
$ sudo npm install -g Bower
```
##### Install MongoDB
```sh
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
$ sudo apt-get install -y mongodb-org
```

### Local Setup

##### Clone the Repo
```sh
$ git clone https://github.com/GenHax/illuminati.git
```

##### Install Dependencies
To install the node modules and bower components in server:-
```sh
$ npm install
$ bower install
```
To install the node modules and bower components for client:-
```sh
$ cd public
$ npm install
$ bower install
```

##### Running the server
```sh
$ sudo service mongod start
$ npm start
```
Visit http://localhost:3000 in your browser

##### Technologies Used
* HTML5
* CSS3
* Bootstrap3
* Ajax
* Nodejs
* Express
* MongoDB

