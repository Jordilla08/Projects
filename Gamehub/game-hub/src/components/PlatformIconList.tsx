import {FaWindows, FaXbox, FaPlaystation, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../Hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'


interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        xbox: FaXbox,
        playstation: FaPlaystation,
        ios: MdPhoneIphone,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        nintendo: SiNintendo,
        web: BsGlobe
    }
  return (
    <HStack marginY={'10px'}>
    {platforms.map((platform) => 
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />)}
    </HStack>
  )
}

export default PlatformIconList