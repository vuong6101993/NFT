import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  id: number;
  artist: string;
  activity: string;
  nft: string;
  transaction: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'アーティスト',
    dataIndex: 'artist',
  },
  {
    title: 'アクティビティ',
    dataIndex: 'activity',
  },
  {
    title: 'NFT',
    dataIndex: 'nft',
  },
  {
    title: '取引',
    dataIndex: 'transaction',
  },
];

const data: DataType[] = [
  {
    id: 8466754,
    artist: 'Albert Flores',
    activity: 'Blid',
    nft: 'Too live',
    transaction: '2 second ago',
  },
  {
    id: 3562756,
    artist: 'Savannah Nguyen',
    activity: 'Blid',
    nft: 'To the moon to be born',
    transaction: '5 second ago',
  },
  {
    id: 7372572,
    artist: 'Wade Warren',
    activity: 'Blid',
    nft: 'Face time lapse of Michael Jordan',
    transaction: '1 minutes ago',
  },
  {
    id: 3545756,
    artist: 'Courtney Henry',
    activity: 'Purchase',
    nft: 'Yo Reddit!',
    transaction: '1 minutes ago',
  },
  {
    id: 3545756,
    artist: 'Jane Cooper',
    activity: 'Blid',
    nft: 'Understanding color theory',
    transaction: '1 minutes ago',
  },
  {
    id: 3562756,
    artist: 'Cameron Williamson',
    activity: 'Purchase',
    nft: 'Any mechanical keyboard',
    transaction: '1 minutes ago',
  },
  {
    id: 5262261,
    artist: 'Marvin McKinney',
    activity: 'Purchase ',
    nft: 'HODL the Flame',
    transaction: '2 minutes ago',
  },
  {
    id: 9232734,
    artist: 'Esther Howard',
    activity: 'Blid',
    nft: 'The More Important the Work',
    transaction: '2 minutes ago',
  },
  {
    id: 5637657,
    artist: 'Jenny Wilson',
    activity: 'Blid',
    nft: 'Sailor Elon',
    transaction: '2 minutes ago',
  },
  {
    id: 5262267,
    artist: 'Jacob Jones',
    activity: 'Blid',
    nft: 'Colorful Night',
    transaction: '2 minutes ago',
  },
];

const TableData: React.FC = () => (
  <Table columns={columns} dataSource={data} scroll={{ y: 240 }} />
);

export default TableData;