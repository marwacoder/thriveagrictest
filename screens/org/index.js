import React from 'react';
import {NativeBaseProvider,View, StatusBar, Text, Box,Center,VStack,FormControl, Input,Icon, IconButton, extendTheme} from 'native-base'


const Organisation = () => (
    <View>
       <HStack px="4" pt='5' pb="10" justifyContent="space-between" alignItems='center' w="100%">

              <Text color="#9638FF" fontSize={18} lineHeight={27} fontWeight={500} fontFamily={'Poppins-Regular'}>
                Customer
              </Text>

              <HStack justifyContent="space-between" alignItems='center'>
                <IconButton onPress={() => navigation.goBack()} colorScheme="rgba(221, 190, 243, 1)"><ChevronLeftIcon color={'#9638FF'} /></IconButton>

                <Text fontFamily={'Poppins-Regular'} fontSize={14} lineHeight={21} color={'#9638FF'}>Back</Text>
              </HStack>
            </HStack>
    </View>
);

export default Organisation;
