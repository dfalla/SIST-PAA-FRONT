import { ReactNode } from 'react'

import { NavLink } from "react-router-dom";

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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import {
  FiChevronDown,
} from 'react-icons/fi';
import { useAuthStore } from '@/store'

interface SubContent {
  title: string;
  path: string;
}

interface Props {
  children: ReactNode;
  path: string;
}

interface LinkItemProps {
  name: string;
  path: string;
  subContent?: SubContent[];
}

interface PROPERTIESHOVERANDACTIVE {
  color: string;
  bg: string;
  cursor: string;
  borderBottom: string;
  borderRadius: string;
}
  
const Links: Array<LinkItemProps> = [
  { 
    name: 'Alumnos', 
    path: '/students',
    subContent: [
      {
        title: 'Alumnos Registrados',
        path: '/students/all'
      },
      {
        title: 'Exportar Alumnos',
        path: '/students/export'
      } 
    ]
  },
  { 
    name: 'Horarios', 
    path: '/schedules', 
  },
  { 
    name: 'Pagos', 
    path: '/pays', 
  },
  { 
    name: 'Préstamos', 
    path: '/money-to-rent',
    subContent: [
      {
        title: 'Préstamos hechos',
        path: '/money-to-rent/delivered'
      },
      {
        title: 'Registro de pagos',
        path: '/money-to-rent/register'
      } 
    ]
  }
  
]
  
const Navigation = ({ children, path}: Props) => {

  return (
    <Box
      as={NavLink}
      px={2}
      py={1}
      rounded={'md'}
      to={path}
    >
      {children}
    </Box>
  )
}

const propertiesHoverAndActive: PROPERTIESHOVERANDACTIVE = {
  color: '#FAAC06',
  bg: 'inherit',
  cursor: 'pointer',
  borderBottom: '3px #FAAC06 solid',
  borderRadius: '5%'
}


const ItemTextComponent = ({path, name}: {path: string, name: string})=>{
  return (
    <Text
      color ='black'
      _hover={propertiesHoverAndActive}
    >
      <Navigation path={path}>
        {name}
      </Navigation>
    </Text>
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
                  link.hasOwnProperty('subContent') 
                  ? (
                  <Menu key={link.name}>
                    {({isOpen})=>(
                      <>
                        <MenuButton 
                          as={Button} 
                          color ='black'
                          isActive={isOpen}
                          _active={propertiesHoverAndActive}
                          _hover={propertiesHoverAndActive}
                        >
                          {link.name}
                        </MenuButton>

                        <MenuList
                          zIndex={9999}
                        >
                          {
                            link.subContent!.map((item)=>(
                              <MenuItem 
                                
                                key={item.title}
                                as={NavLink} 
                                to={item.path}
                              >
                                {item.title}
                              </MenuItem>
                            ))
                          }
                        </MenuList>
                      
                      </>
                    )}
                  </Menu>
                  ) 
                  : (
                  <ItemTextComponent key={link.name} path={link.path} name={link.name}/>
                  )

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
              >
                Perfil
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: '#FAAC06',
                }}
                onClick={logout}
              >
                Usuarios
              </MenuItem>
              <MenuItem
                _hover={{
                  backgroundColor: '#FAAC06',
                }}
                onClick={logout}
              >
                Cerrar Sesión
              </MenuItem>
              
              </MenuList>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map(({ name, path }) => (
                <Navigation key={name} path={path}>{name}</Navigation>
              ))} */}
                {Links.map((link) => (
                  link.hasOwnProperty('subContent') 
                  ? (
                  <Accordion key={link.name} allowToggle> 
                    <AccordionItem border={'none'}>
                        <AccordionButton 
                          width={'100%'}
                          padding='0px'
                          paddingRight={'5px'}
                        >
                          <Button 
                            as={Box}
                            flex='1'
                            textAlign='left'
                            pl={2} 
                            color={'black'}
                            _active={propertiesHoverAndActive}
                            _hover={propertiesHoverAndActive}
                          >

                            <Box flex='1' textAlign='start'>
                              {link.name}
                            </Box>

                            <AccordionIcon/>

                          </Button>
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                          { link.subContent!.map((item)=>(
                              
                            <Button
                              as={NavLink}
                              to={item.path}
                              key={item.title}
                              width={'100%'}
                              color='black' 
                            >
                              <Box as="span" flex='1' textAlign='left'>
                                {item.title}
                              </Box>
                            
                            </Button>
                          ))}
                        </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  ) 
                  : (
                  <ItemTextComponent key={link.name} path={link.path} name={link.name}/>
                  )

              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      { children }
    </>
  )
}