import sortBy from 'lodash/sortBy';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { type Company } from './data';

export default function DataTableComponent(data: {
  initialSortingField: string,
  initialSortingOrder?: string,
  dataList: any[],
  headerList: any[],
}) {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ 
    columnAccessor: `${data.initialSortingField}`, 
    direction: 'asc' 
  });
  const [records, setRecords] = useState(sortBy(data.dataList, data.initialSortingField));

  useEffect(() => {
    const allData = sortBy(data.dataList, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? allData.reverse() : allData);
  }, [sortStatus]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      records={records}
      columns={data.headerList}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
    />
  );
}