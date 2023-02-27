import { Group, Input, Text } from '@mantine/core'
import Btn from '../profile-ui/Btn'
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
  return (
    <div>
        <form>
            <Group mt={30}>
                <Input 
                    placeholder="enter email to add people (seperate by commas)" 
                    style={{width: "87%"}}
                    variant="filled"
                />
                <Btn label='Add' type="submit" btnWidth='10%' />
            </Group>
        </form>
        <Text fw={700} mt={30}>
            People with access
        </Text>
        {
            people.map((e, i) => {
                return <PeopleWithAccessUI person={e} />
            })
        }
    </div>
  )
}

export default ColloborationSelect