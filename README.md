# WhatsCrap Messenger

WhatsCrap Messenger is an instant messaging application with two main objectives

1. Improve my UI, JavaScript, React & Redux skills
1. Explore using Web Sockets for communication between browser client and service

The project consists of two parts

1. Frontend UI
1. Backend service


This repository is the frontend UI which is written in [JavaScript](https://www.javascript.com/), uses [React](https://reactjs.org/) & [Redux](https://redux.js.org/) and is hosted on [Netlify](https://www.netlify.com/). The address of the hosted Netlify service is https://heuristic-ardinghelli-186726.netlify.app/

Repository https://github.com/DangerousDarlow/messenger is the service which is written in [Kotlin](https://kotlinlang.org/), uses the [Spring Boot](https://spring.io/projects/spring-boot) framework and is hosted on [Heroku](https://www.heroku.com/). The address of the hosted Heroku service is https://whats-crap.herokuapp.com/

## How To Build & Run

Building and running the application locally requires the following to be installed

1. [Node](https://nodejs.org/)
1. [Yarn](https://yarnpkg.com/)

It is recommended that Node is installed using Node Version Manager

* Posix - https://github.com/nvm-sh/nvm
* Windows - https://github.com/coreybutler/nvm-windows

The project uses icons from the Pro (subscription) version of [Font Awesome](https://fontawesome.com/). Create an environment variable named `FONTAWESOME_NPM_AUTH_TOKEN` and set it to the value of your Font Awesome `Pro Package Token`. To get your token log in to Font Awesome and navigate to `Account Details`. 

Clone the repository

> git clone https://github.com/DangerousDarlow/messenger-react-ui.git

Download dependencies

> yarn install

Run and application in development mode

> yarn start

## Troubleshooting

If a timeout connecting to the service occurs this is likely because it's asleep. Try again after about 30 seconds.