# Trying out Nightwatch.js
Noodling on Nightwatch.js with Docker-ized Selenium

# Pre-requisites
- [Node.js 8.x](https://nodejs.org)
- [Docker Community Edition](https://www.docker.com/community-edition)
- [Docker Compose](https://docs.docker.com/compose)

# Getting Started
Run `docker-compose up -d` to download Docker image and instantiate a container for Selenium Standalone Server with 
Chrome browser. Nightwatch is configured to connect to the Docker-ized Selenium container and run tests in the browser.
The container is running a VNC server so you may connect via VNC and watch the browser while tests are running. Simply
open `localhost:5900` in your VNC client and enter the password `secret` when prompted.

Run `npm install` to download Nightwatch.js and its dependencies.

# How to Run tests
`npm run test-main`: Runs basic acceptance tests for the main and about pages of NWEA's website.
