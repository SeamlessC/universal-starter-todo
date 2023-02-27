import { useState } from 'react';
import { Modal, Button, Group, Text } from '@mantine/core';

export function CollaborationFeatures(modal: {setOpened: any, opened: any}) {
  

  return (
    <Modal
        opened={modal.opened}
        onClose={() => modal.setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
    </Modal>
  );
}