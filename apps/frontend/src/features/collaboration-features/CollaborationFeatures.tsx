import { Modal, Text } from '@mantine/core';
import ColloborationSelect from './ColloborationSelect';

export function CollaborationFeatures(modal: {setOpened: any, opened: any}) {
  

  return (
    <Modal
      centered
      size="50%"
      opened={modal.opened}
      onClose={() => modal.setOpened(false)}
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
        <ColloborationSelect />
      </div>
    </Modal>
  );
}