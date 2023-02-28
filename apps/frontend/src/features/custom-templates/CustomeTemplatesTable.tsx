import { Group, ScrollArea, Table } from '@mantine/core'

import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter-icon.png'
import YoutubeIcon from '../../assets/youtube-icon.png'
import CustomeLink from '../profile-ui/Links';
import EditIcon from '../../assets/edit-icon.png'
import DeleteIcon from '../../assets/delete-icon.png'
import InfoIcon from '../../assets/info-icon.png'
import IconBtn from '../widgets/IconBtn';

function CustomeTemplatesTable() {

    const elements: any[] = [
        { name: "Client Report A", type: "Periodic", description: "sergake aergba", integrations: [FacebookIcon] },
        { name: "Client Report B", type: "Periodic", description: "sergake aergba", integrations: [FacebookIcon, TwitterIcon] },
        { name: "Report A", type: "Periodic", description: "sergake aergba", integrations: [FacebookIcon, YoutubeIcon, TwitterIcon,] },
        { name: "Client VVV", type: "Periodic", description: "sergake aergba", integrations: [YoutubeIcon] },
        { name: "Client Report A", type: "Periodic", description: "sergake aergba", integrations: [FacebookIcon] },
        { name: "Client Report B", type: "Periodic", description: "sergake aergba", integrations: [FacebookIcon, TwitterIcon] },
      ]; 

    const rows = elements?.map((element) => (
        <tr key={element.name} style={{background: "white"}}>
          <td>{element.name}</td>
          <td>{element.type}</td>
          <td>
            <Group>
                {
                    element.integrations.map((e: string) => {
                        return <img src={e} width={30} />
                    })
                }
            </Group>
          </td>
          <td>{element.description}</td>
          <td>
            <Group position="apart">
                <CustomeLink label='Create Dashboard' underline={true} />
                <IconBtn icon={EditIcon} removeBackground={true} />
                <IconBtn icon={DeleteIcon} removeBackground={true} />
                <IconBtn icon={InfoIcon} removeBackground={true} />
            </Group>
          </td>
        </tr>
    ));

  return (
    <Table mt={40} highlightOnHover withColumnBorders>
        <ScrollArea style={{height: window.innerHeight/5 * 3}} scrollbarSize={2} offsetScrollbars>
            <thead>
                <tr>
                    <th>Template Name</th>
                    <th>Dashboard Type</th>
                    <th style={{width: "20%"}}>Integrations</th>
                    <th>Description</th>
                    <th style={{width: "30%"}}>Actions</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </ScrollArea>
    </Table>
  )
}

export default CustomeTemplatesTable