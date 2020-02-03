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
          <style>{`
            .mdl-layout__content {
              padding: 24px;
              flex: none;
            }
              .mdl-textfield__error {
              visibility: visible;
              padding: 5px;
            }
              .mdl-card {
              padding-bottom: 10px;
              min-width: 500px;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <script src="https://code.getmdl.io/1.3.0/material.min.js"/>
        </body>
      </html>
    );
  }
};