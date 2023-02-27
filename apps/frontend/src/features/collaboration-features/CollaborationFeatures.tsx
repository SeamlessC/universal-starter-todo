import { Modal, Text } from '@mantine/core';
import { useState } from 'react';
import CollaborationSendMsg from './CollaborationSendMsg';
import ColloborationSelect from './ColloborationSelect';

export function CollaborationFeatures(modal: {setOpened: any, opened: any}) {
  const [value, setValue] = useState([]);
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);
  const [showSendMsgView, setShowSendMsgView] = useState(false)

  return (
    <Modal
      centered
      size="50%"
      opened={modal.opened}
      onClose={() => {
        modal.setOpened(false)
        setShowSendMsgView(false)
      }}
      title={
        <Text 
          fw={700} 
          size="lg" 
        >
          Invite People to Your Account
        </Text>
      }
    >
      <div>
        {
          showSendMsgView == false ?
            <ColloborationSelect 
              setData={setData} 
              data={data} 
              value={value} 
              setValue={setValue} 
              setShowSendMsgView={setShowSendMsgView}
            />
          :
            <CollaborationSendMsg />  
        }
      </div>
    </Modal>
  );
}