import { DataTable } from 'mantine-datatable';
import { companies } from './data';

export default function BasicUsageExample() {
  return (
    <DataTable
      columns={[{ accessor: 'name' }, { accessor: 'streetAddress' }, { accessor: 'city' }, { accessor: 'state' }]}
      records={companies}
    />
  );
}