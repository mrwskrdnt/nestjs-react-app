import React from 'react';
import {
  Document,
  Head,
  Main,
} from '@react-ssr/nestjs-express';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
          <title>nestjs-react-app</title>
        </Head>
        <body>
          <Main />
          <script src="https://code.getmdl.io/1.3.0/material.min.js"/>
        </body>
      </html>
    );
  }
};