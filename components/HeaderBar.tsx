import { FC } from 'react'
import Image from 'next/image'
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react'
import { TbUser, TbSearch } from 'react-icons/tb'
import HeaderMenu from '../components/HeaderMenu'
import AuthModal from './AuthModal'

const HeaderBar: FC = () => {
  const [isLargerThanPhone] = useMediaQuery('(min-width: 768px)')
  const [isLargerThanTablet] = useMediaQuery('(min-width: 1050px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <AuthModal isOpen={isOpen} onClose={onClose} />
      <Flex
        as={'header'}
        alignItems={'center'}
        gap={4}
        bgColor={'blackAlpha.700'}
        px={2}
        h={'56px'}
      >
        {isLargerThanPhone && (
          <Image src="/logo.svg" alt="logo" height={54} width={162} />
        )}
        <HeaderMenu isLargerThanPhone={isLargerThanPhone} />
        <Spacer />
        <InputGroup w={340}>
          <InputLeftElement pointerEvents="none">
            <TbSearch />
          </InputLeftElement>
          <Input type={'text'} placeholder={'Search'} />
        </InputGroup>
        <Spacer />
        {isLargerThanTablet ? (
          <Button leftIcon={<TbUser />} onClick={onOpen}>
            Login / Register
          </Button>
        ) : (
          <IconButton
            aria-label="Login / Register"
            icon={<TbUser />}
            onClick={onOpen}
          />
        )}
      </Flex>
    </>
  )
}

export default HeaderBar
