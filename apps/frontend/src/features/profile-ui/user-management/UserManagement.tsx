import { ActionIcon, CloseButton, Collapse, createStyles, Group, Input, ScrollArea,} from '@mantine/core'
import { useState } from 'react'
import CustomeLink from '../Links';
import Link from '../Links';
import CustomTable from './CustomTable';
import DeleteIcon from '../../../assets/delete-icon.png'
import SearchIcon from '../../../assets/search-icon.png'
import WhiteSharehIcon from '../../../assets/white-share-icon.png'
import IconBtn from '../IconBtn';

const useStyle = createStyles((theme) => ({
  collapseLink: {
    marginTop: "3%",
  },
  table: {
    marginTop: "5%",
  }
}))

function UserManagement() {
  const { classes, theme } = useStyle()
  const [opened, setOpened] = useState(false);
  const [noOfPendingRequests, setNoOfPendingRequests] = useState(2)

  const pendingTableHeads = [
    "Email Address",
    "Invitation Send On",
    "",
  ]

  const userTableHeads = [
    "User",
    "Email Address",
    "Last Seen",
    "",
  ]

  const PendingElements = [
    { eAddress: "abc@gmail.com", date: "12/12/2323",},
    { eAddress: "123@gmail.com", date: "12/12/2323",},
    { eAddress: "maneesha@gmail.com", date: "12/12/2323",},
    { eAddress: "seamlessC@gmail.com", date: "12/12/2323",},
    { eAddress: "lllkkkjjjhh@gmail.com", date: "12/12/2323",},
  ];

  const UserElements = [
    { name: "Maneesha", eAddress: "abc@gmail.com", date: "12/12/2323",},
    { name: "Lakshani", eAddress: "123@gmail.com", date: "12/12/2323",},
    { name: "AAA", eAddress: "maneesha@gmail.com", date: "12/12/2323",},
    { name: "SeamlessC", eAddress: "seamlessC@gmail.com", date: "12/12/2323",},
    { name: "AAAACCC", eAddress: "lllkkkjjjhh@gmail.com", date: "12/12/2323",},
  ];

  const PendingTableBody  = PendingElements.map((element) => (
    <tr key={element.eAddress}>
      <td>{element.eAddress}</td>
      <td>{element.date}</td>
      <td>
        <Group position="center">
          <CustomeLink label="Resend" underline={true} />
          <ActionIcon onClick={(val) => console.log("delete clicked")}>
            <img src={DeleteIcon} width={15} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  const UserTableBody  = UserElements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.eAddress}</td>
      <td>{element.date}</td>
      <td>
        <CloseButton aria-label="Close modal" />
      </td>
    </tr>
  ));

  const PendingTableHeads = pendingTableHeads.map((head) => (
    <th key={head}>{head}</th>
  ));

  const UserTableHeads = userTableHeads.map((head) => (
    <th key={head}>{head}</th>
  ));
  
  return (
    <div>
      {/* Search& share */}
      <Group position="apart">
        <Input
          icon={<img src={SearchIcon} width={20} />}
          variant="filled"
          placeholder="Your email"
        />
        <IconBtn label="Share" icon={WhiteSharehIcon} />
      </Group>

      {/* Collapse Link */}
      <div onClick={() => setOpened((o) => !o)} className={classes.collapseLink}>
        <Link 
          label={`Pending Requests (${noOfPendingRequests<10 ? `0${noOfPendingRequests}` : noOfPendingRequests})`}
          underline={true}
        />
      </div>

      {/* Collapse Body */}
      <Collapse in={opened}>
        <ScrollArea 
          style={{ height: "250px" }} 
          offsetScrollbars scrollbarSize={6} 
          scrollHideDelay={1500}
        > 
          <CustomTable 
            rows={PendingTableBody}
            Heads={PendingTableHeads}
          />
        </ScrollArea>  
      </Collapse>

      {/* User Info Table */}
      <ScrollArea 
        style={{ height: "250px" }} 
        offsetScrollbars scrollbarSize={6} 
        scrollHideDelay={1500}
        className={classes.table}
      >
        <CustomTable 
          rows={UserTableBody}
          Heads={UserTableHeads}
        />
      </ScrollArea>

    </div>
  )
}

export default UserManagement