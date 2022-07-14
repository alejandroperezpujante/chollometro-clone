import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { type FC } from 'react'
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const AuthModal: FC<Props> = ({ isOpen, onClose }) => {
  const isLogIn = useDisclosure()
  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h={600} w={520}>
        <ModalCloseButton />
        <ModalBody as={Center}>
          <VStack gap={8}>
            <Button onClick={() => isLogIn.onToggle()}>
              {isLogIn.isOpen
                ? 'Already have an account?'
                : "Don't have and account?"}
            </Button>
            {isLogIn.isOpen ? <RegisterForm /> : <LogInForm />}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal
