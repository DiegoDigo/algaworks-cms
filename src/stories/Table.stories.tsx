import { mdiOpenInNew } from '@mdi/js';
import Icon from '@mdi/react';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Column, useTable } from 'react-table';

import Table from '../components/Table';

type Data = {
  preview: React.ReactNode,
  col1: string,
  col2: string,
  actions: string
}

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

// const Template: Story<TableProps> = (args) => <Table {...args} />;

// export const Default = Template.bind({});
// Default.args = {


// };

export function Default() {

  const _data = React.useMemo<Array<Data>>(
    () => [
      {
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
        col1: 'batata',
        col2: 'World',
        actions: 'Açoes'
      },
      {
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
        col1: 'Hello',
        col2: 'World',
        actions: 'Açoes'
      },
      {
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
        col1: 'react-table',
        col2: 'rocks',
        actions: 'Açoes'
      },
      {
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
        col1: 'whatever',
        col2: 'you want',
        actions: 'Açoes'
      },
    ],
    []
  );

  const _columns = React.useMemo<Array<Column<Data>>>(
    () => [
      {
        Header: '',
        accessor: 'preview',



      },
      {
        Header: 'Column 1',
        accessor: 'col1',
        width: 320,
        Cell: (row) => <div style={{ textAlign: 'right' }}>{row.value}</div>
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        Cell: (row) => <div style={{ textAlign: 'center' }}>{row.value}</div>
      },
      {
        Header: 'Column 3',
        accessor: 'actions',
        Cell: (row) => <div style={{ textAlign: 'center' }}>{row.value}</div>
      },
    ],
    []
  )

  const instance = useTable<Data>({ data: _data, columns: _columns })

  return <Table<Data> instance={instance} />
}