import { ReactNode } from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image ,
    useDisclosure,
    useColorModeValue,
    Text,
    Stack,
    VStack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {
  FiChevronDown,
} from 'react-icons/fi';
import { useAuthStore } from '@/store'
  
  interface Props {
    children: ReactNode
  }
  
  const Links = ['Alumnos', 'Pagos', 'Horarios']
  
  const NavLink = (props: Props) => {
    const { children } = props
  
    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
      </Box>
    )
  }
  
  export const Navbar = ({ children }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const logout = useAuthStore((state)=> state.logout)
    const profile = useAuthStore((state)=>state.profile);
    const { name, lastName } = profile;
    return (
      <>
        <Box bg={'#f1dbe5'} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box>
                <Image
                  src='../../logo.jpeg'
                  borderRadius='full'
                  boxSize='50px'
                />
              </Box>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <Text
                    key={link}
                    color ='black'
                    _hover={{
                      color: '#FAAC06',
                      bg: 'inherit',
                      cursor: 'pointer',
                      borderBottom: '3px #FAAC06 solid',
                      borderRadius: '5%'
                      
                    }}
                  >
                    {link}
                  </Text>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<FiChevronDown color='black'/>}
                  py={2}
                  transition="all 0.3s"
                  bg={'inherit'}>
                  <HStack>
                    <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />
                    <VStack
                      display={{ base: 'none', md: 'flex' }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm" color={'black'}>{`${name} ${lastName}`}</Text>
                      <Text fontSize="xs" color="gray.600">
                          SuperAdmin
                      </Text>
                    </VStack>
                  </HStack>
                </MenuButton>
  
                <MenuList
                  bg={useColorModeValue('white', 'gray.900')}
                  borderColor={useColorModeValue('gray.200', 'gray.700')}
                >
                <MenuItem
                  _hover={{
                    backgroundColor: '#FAAC06',
                  }}
                  onClick={logout}
                >Cerrar Sesión</MenuItem>
                </MenuList>
               
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
  
        { children }
      </>
    )
  }