import { ActionIcon, Center, createStyles, Table } from '@mantine/core'
import EditIcon from '../../../assets/select-icon.png'

const useStyle = createStyles((theme) => ({
    table: {
      marginTop: "7%",
    },
    tableRow: {
      textAlign: "center",
    },
  }))

  const elements = [
    { iNo: 6, date: "12/12/2022", payment: 40, status: 'Pending' },
    { iNo: 7, date: "12/12/2022", payment: 300, status: 'Paid' },
    { iNo: 39, date: "12/12/2022", payment: 40.33, status: 'Paid' },
    { iNo: 56, date: "12/12/2022", payment: 1000, status: 'Paid' },
    { iNo: 58, date: "12/12/2022", payment: 10000, status: 'Pending' },
  ];

function SecuritySettingsTable(table: {withBorder?: boolean, withColBorder?: boolean, heads: string[], isAccessLog?: boolean}) {
  const { classes, theme } = useStyle()  

  const tableHeads = table.heads.map((head) => (
    <th><Center>{head}</Center></th>
  ))

  const AccessLogRows = elements.map((element) => (
    <tr key={element.iNo} className={classes.tableRow}>
        <td>{element.date}</td>
        <td>{element.status}</td>
        <td>{element.iNo}</td>
        <td>{element.payment}</td>
        <td>
            <Center>
                <ActionIcon>
                    <img src={EditIcon} width={15} />
                </ActionIcon>
            </Center>
        </td>
    </tr>
  ));

  const IPAccessRows = elements.map((element) => (
    <tr key={element.iNo} className={classes.tableRow}>
        <td>{element.date}</td>
        <td>{element.status}</td>
        <td>{element.iNo}</td>
    </tr>
  ));
  
  return (
    <div>
        <Table 
            withBorder={table.withBorder == true ? true : false}
            withColumnBorders={table.withColBorder == true ? true : false}
            className={classes.table}
        >
            <thead style={{background: `${theme.colors.gray[2]}`}}>
                <tr>{tableHeads}</tr>
            </thead>
            <tbody>{table.isAccessLog ? AccessLogRows : IPAccessRows}</tbody>
        </Table>
    </div>
  )
}

export default SecuritySettingsTable