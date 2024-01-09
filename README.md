# eula.ai

[![Build Status](https://www.travis-ci.com/cs130-w21/22.svg?branch=master)](https://www.travis-ci.com/cs130-w21/22)

A simple web application that tells you if your end-user license agreement is ethical and summarizes your document for easy understanding.

# Demo

Input any EULA in text or PDF format:

<img width="1279" alt="input" src="https://github.com/parp1/EULA.ai/assets/10479644/c37b072a-3deb-43b5-b067-e0b9005bc048">

Calculate its ethicality based on other EULAs!

<img width="1256" alt="calculating" src="https://github.com/parp1/EULA.ai/assets/10479644/ae4266b6-68af-4933-8edb-d567448b89ea">

<img width="1181" alt="output" src="https://github.com/parp1/EULA.ai/assets/10479644/f31985e2-e36d-4252-9c19-7efc12ae1690">

## Setup

To clone and run this application, you will need [Git](https://git-scm.com), [Python 3.8.5](https://www.python.org/downloads/release/python-385/), and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Begin by cloning repository:

```bash
# Clone this repository
$ git clone https://github.com/cs130-w21/22.git

# Go into the repository
$ cd 22
```

Download the [machine learning model](https://drive.google.com/file/d/1zrMjfwqDHHSCeRlho4C0-iOQ90r5XvwK/view) and place the tarball into the `backend/` folder, set up, and run Flask server:

```bash
# Go into backend/ folder
$ cd backend

# Run script to set up folder for model
$ ./fetch_model.sh

# Install Python dependencies
$ pip3 install -r requirements.txt

# Set environment variable
$ export FLASK_APP=flaskApi.py

# Run Flask app
$ flask run
```

In a new terminal, install dependencies and run the frontend with npm:

```bash
# Install dependencies
$ npm install

# Run the app
$ npm start
```

Or, use [yarn](https://yarnpkg.com/):

```bash
# Install dependencies
$ yarn install

# Run the app
$ yarn start
```
