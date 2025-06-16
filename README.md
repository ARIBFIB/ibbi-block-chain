# Backend Server and API Setup Guide

This repository provides instructions for setting up the backend server (Node.js), API server (FastAPI), and Ethereum smart contract development environment using Truffle. Follow the steps below to configure your local environment.

## Table of Contents

1. [Backend Server Setup (Node.js)](#backend-server-setup-nodejs)
2. [API Server Setup (FastAPI)](#api-server-setup-fastapi)
3. [Truffle Setup](#truffle-setup)
4. [Dependencies Installation](#dependencies-installation)
5. [Verify Installed Dependencies](#verify-installed-dependencies)

---

## Backend Server Setup (Node.js)

To start the Node.js backend server, follow the steps below:

1. Open a terminal and navigate to the root of the project.
2. Run the following command to start the backend server:

    ```bash
    node index.js
    ```

3. The server will now be running on `http://localhost:3000` (default port).

---

## API Server Setup (FastAPI)

To set up and run the FastAPI server:

1. Navigate to the `database_api` directory:

    ```bash
    cd database_api
    ```

2. Run the following command to start the FastAPI server:

    ```bash
    uvicorn main:app --reload --host 127.0.0.1 --port 8000
    ```

3. The API server will be running on `http://localhost:8000` (default port).

---

## Truffle Setup

Truffle is used for Ethereum smart contract development. Follow these steps to get started:

1. Install Truffle globally:

    ```bash
    npm install -g truffle
    ```

2. Initialize a new Truffle project:

    ```bash
    truffle init
    ```

3. Compile the smart contracts:

    ```bash
    truffle compile
    ```

4. Migrate the smart contracts to the blockchain:

    ```bash
    truffle migrate
    ```

5. Start the Truffle development console:

    ```bash
    truffle develop
    ```

---

## Dependencies Installation

To install the necessary dependencies for the project, run the following commands:

1. Install Node.js dependencies:

    ```bash
    npm install
    npm install web3
    npm install truffle
    npm install mysql
    npm install express
    npm install dotenv
    npm install jsonwebtoken
    npm install cors
    npm install body-parser
    npm install ethers
    npm install bcryptjs
    npm install axios
    ```

2. Install FastAPI dependencies:

    ```bash
    pip install fastapi mysql-connector-python pydantic python-dotenv uvicorn uvicorn[standard] PyJWT
    ```

3. Install Browserify:

    ```bash
    npm install browserify
    ```

---

## Verify Installed Dependencies

To verify that all the dependencies have been installed correctly, use the following command:

```bash
npm list --depth=0
