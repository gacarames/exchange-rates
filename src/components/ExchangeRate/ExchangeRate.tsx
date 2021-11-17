import React, { FC } from "react";
import { useQuery, gql } from "@apollo/client";
// import { Card, CardContent } from '@mui/material';

const EXCHANGE_RATES = gql`
  query GetExchangeRates($exchangeName: String!) {
    exchange(exchangeName: $exchangeName) {
      compra
      venta
    }
  }
`;

interface ExchangeRateProps {
  exchangeName: String;
}

const ExchangeRate: FC<ExchangeRateProps> = ({ exchangeName }) => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: { exchangeName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="widget-currency-col">
      <h4>{exchangeName}</h4>
      <span>${data.exchange.compra} / </span>
      <span>${data.exchange.venta}</span>
      <div>
        <span>{data.exchange.fecha}</span>
      </div>
    </div>
  );
};

export default ExchangeRate;
