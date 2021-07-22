import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Almoço',
          value: 150,
          transactionType: 'withdraw',
          category: 'Comida',
          createdAt: '2021-02-15 12:02:00',
        },
        {
          id: 2,
          title: 'Desenvolvimento de website',
          value: 12000,
          transactionType: 'deposit',
          category: 'Desenvolvimento',
          createdAt: '2021-05-11 09:56:00',
        },
        {
          id: 3,
          title: 'Viagem',
          value: 2000,
          transactionType: 'withdraw',
          category: 'Lazer',
          createdAt: '2021-07-25 19:30:00',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
