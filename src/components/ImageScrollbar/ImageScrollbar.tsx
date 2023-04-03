import { useContext } from 'react';
import Image from 'next/image';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight  } from 'react-icons/fa';
import { Photo } from '@/utils/APIResponseDetails.model';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Flex justifyContent='center' alignItems='center' marginRight='1'>
        <Icon
          as={FaArrowAltCircleLeft}
          onClick={() => scrollPrev()}
          fontSize='2xl'
          cursor='pointer'
        />
      </Flex>
    );
  }

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Flex justifyContent='center' alignItems='center' marginLeft='1'>
        <Icon
          as={FaArrowAltCircleRight}
          onClick={() => scrollNext()}
          fontSize='2xl'
          cursor='pointer'
      />
      </Flex>
    );
  }


const ImageScrollbar = ({ data } : { data : Photo[]}) => {
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box width='910px' itemID={String(item.id)} overflow='hidden' p='1' key={item.id}>
                    <Image 
                        alt="photo" 
                        placeholder="blur" 
                        blurDataURL={item.url} 
                        src={item.url} 
                        width={1000} 
                        height={500} 
                        sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" 
                    />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default ImageScrollbar;