import { type FC } from 'react'
import {
  Button,
  Grid,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { TbChevronDown, TbMenu2, TbHome } from 'react-icons/tb'
import { CATEGORIES, SHOPS } from '../constants/Menu'

interface Props {
  isLargerThanPhone: boolean
}

const HeaderMenu: FC<Props> = ({ isLargerThanPhone }) => {
  return (
    <Menu isLazy>
      {isLargerThanPhone ? (
        <MenuButton
          as={Button}
          rightIcon={<TbChevronDown />}
          bgColor={'whiteAlpha.400'}
          color={'white'}
          width={98}
          _hover={{ bgColor: 'black' }}
          _active={{
            color: 'orange.300',
            bgColor: 'white'
          }}
        >
          Menu
        </MenuButton>
      ) : (
        <MenuButton as={IconButton} aria-label="Menu" icon={<TbMenu2 />} />
      )}
      <MenuList w={460}>
        <MenuItem icon={<TbHome />}>Home</MenuItem>
        <MenuDivider />
        <MenuGroup title="Categories" fontSize={'2xl'}>
          <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(2, 1fr)">
            {CATEGORIES.map(name => (
              <MenuItem key={name}>{name}</MenuItem>
            ))}
          </Grid>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Shops" fontSize={'2xl'}>
          {SHOPS.map(name => (
            <MenuItem key={name}>{name}</MenuItem>
          ))}
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default HeaderMenu
