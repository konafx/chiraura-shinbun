import React from 'react';

import Table from 'components/Table';

type Props = {
  title: string;
};

const columns = [
  'name', 'age', 'jockey',
];

const rows = [
  ['アカネ', 3, '和田'],
  ['アーモンドアイ', 5, 'ルメール'],
  ['カナデ', 7, '池添'],
  ['オーソリティ', 5, '武豊'],
]

const Race: React.FC<Props> = ({ title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <Table columns={columns} rows={rows} />
    </section>
  );
};

export default Race;
