<br/>
<p align="center">
  <h3 align="center">CrediTail</h3>

  <p align="center">
    Pay later but for small scale retailers
    <br/>
    <br/>
    <a href="https://github.com/koushith/CrediTail"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/koushith/CrediTail?color=dark-green) ![Forks](https://img.shields.io/github/forks/koushith/CrediTail?style=social) ![Issues](https://img.shields.io/github/issues/koushith/CrediTail) ![License](https://img.shields.io/github/license/koushith/CrediTail)

## Table Of Contents

- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [License](#license)
- [Authors](#authors)
- [Download Apk](#download)

## Screenshots

![Dribbble shot - 1](https://user-images.githubusercontent.com/30016242/230851429-24b4d646-01ab-4928-ba6e-ed71ad78a4f5.png)

## Built With

React Native with Expo CLI, Node/Express and MongoDB

## Getting Started

### Prerequisites

- Expo CLI and ExpoGO if you are running locally

### Installation

1. Clone the repo

```sh
git clone https://github.com/Koushith/CrediTail.git
```

3. Install NPM packages on both the directory (Client and Server)

```sh
cd server
npm install
npm run nodemon  // by default server will run on PROT-5000
```

```sh
cd client
npm install
npm run web // this will run RN web

// or

npm run android  // you need to open the emulator manually and run this command(if you are on Windows and Linux.

// or

// USING EXPO GO

npx expo start

// open the expo app on phone and scan the QR Code.

```

### Deployment

- Backend is deployed on Railway. you can access the base url at
  `https://nodejs-production-8b92.up.railway.app`

### DB Schemas

#### Invoice

```js

- brandName - ref to Brand
- billNo - Int
- retailerId - Int
- retailerName - ref to retailer
- retailerNumber - ref to retailer
- invoiceAmount - Int
- isSettled - bool
- invoiceDate - Date
- collectionDate - Date

```

#### SalesRep

```js
- repId : String
- repName : String
```

#### Brand

```js
brandName: String;
brandName: String;
```

#### Retailer

```js
retailerId: String;
retailerName: String;
retailerPhone: Number;
```

### API Endpoints

#### Get all Invoices

```

METHOD - GET - returns all invoices.

/v1/invoices

```

#### Create New Invoice

```
METHOD - POST - creates new invoice

/v1/invoice

Body Data
    - brand - String
    - billNo - String
    - retailerName - String
    - inVoiceAmount - Int
    - invoiceDate - Date
    - collectionDate - Date
    - salesRepId - String
    - retailerPhone - Number
    - retailerName - String

```

#### Get Single Invoice by Invoice ID

```
METHOD - GET  - This will return single invoice based on billNo

v1/invoice/:id

Body data:
    - billNo

```

#### Update Invoice - Right now we only allow to send due amount and update accordingly.

```
METHOD - PUT  - update the invoice

v1/invoice/:id

// this api endpoint is used to update the invoice- we are allowing only invoice amount to be updated

Body Data


- dueAmount - Int

if amount is settled, we update that aswell.


```

#### Create Sales Rep

```
METHOD - POST - creates a sales representative

v1/sales

Body Data

- salesRepName
- salesRepId

```

#### Create New Brand

```
METHOD - POST

v1/brand

Body Data

- brandName
- brandId

```

#### Create Retailer

```
METHOD - POST

v1/retailer

Body Data
- retailerName
- retailerId

```

## Download the APK

- currently android only - https://drive.google.com/file/d/1RTp2clNwpEGyr2R-X2NSQnhkDSdIzSjG/view?usp=sharing

## License

Distributed under the MIT License. See [LICENSE](https://github.com/koushith/CrediTail/blob/main/LICENSE.md) for more information.

## Authors

- **Koushith B R** - [Koushith B R](https://github.com/koushith) - \*\* -
