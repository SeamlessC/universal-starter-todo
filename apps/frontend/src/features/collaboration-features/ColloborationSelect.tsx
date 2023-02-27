import { Group, ScrollArea, Text } from '@mantine/core'
import { useState } from 'react'
import Btn from '../profile-ui/Btn'
import { CollaborationMultipleSelect } from './CollaborationMultipleSelect'
import PeopleWithAccessUI from './PeopleWithAccessUI'

const people= [
    {
        name: "Maneesha Lakshani",
        email: "maneesha@gmail.com",
        owner: true,
    },
    {
        name: "Kasun Perera",
        email: "kasunperera@gmail.com",
        owner: false,
    },
    {
        name: "SeamlessC",
        email: "seamlessc@gmail.com",
        owner: false,
    },
]

function ColloborationSelect() {
  const [data, setData] = useState([
       { value: 'react', label: 'React' },
       { value: 'ng', label: 'Angular' },
  ]);

  const [value, setValue] = useState([]);
    
  return (
    <div>
        <form>
            <Group mt={30}>
                <CollaborationMultipleSelect setData={setData} data={data} value={value} setValue={setValue} />
                <Btn label='Add' btnWidth='10%' onClick={() => console.log(value)}/>
            </Group>
        </form>
        <Text fw={700} mt={30}>
            People with access
        </Text>
        <ScrollArea style={{height: window.innerHeight/3}}>
            {
                people.map((e, i) => {
                    return <PeopleWithAccessUI person={e} key={i} />
                })
            }
        </ScrollArea>
    </div>
  )
}

export default ColloborationSelect