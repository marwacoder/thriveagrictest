import React from 'react';
import {   FlatList } from 'react-native';

import {NativeBaseProvider,View, StatusBar, Text, Box,Center,VStack,FormControl, Input,Icon, IconButton, extendTheme} from 'native-base'


const Repository = ({
    params,
}) => (
    <View>
       <FlatList
                        data={memorizeData}
                        keyExtractor={(item) => item.id} 
                      numColumns={2}
                      renderItem={({item})=>{
                          return (
                              <VStack  m="3" w="166px" h='210' borderRadius="xl" p="3" shadow='1' bg="white" space={2} alignItems="center" justifyContent="center">
                                  
                                  <Box pl={20}>
                                      <Box pl={10} >
                                          <IconButton  onPress={()=>{
                                              setProfile(item)
                                              setShowModal(true)
                                          }} h={10} w={10} icon={<Icon as={<MoreVertical stroke={'#252F40'} />} />} borderRadius="full" _icon={{
                                              color: "coolGray.50",
                                              size: "md"
                                          }} _hover={{
                                              bg: "coolGray.800:alpha.20"
                                          }} _pressed={{
                                              bg: "coolGray.800:alpha.20",
                                              _icon: {
                                                  name: "emoji-flirt"
                                              },
                                              _ios: {
                                                  _icon: {
                                                      size: "2xl"
                                                  }
                                              }
                                          }} _ios={{
                                              _icon: {
                                                  size: "2xl"
                                              }
                                          }} />
                                          </Box>
                                      
                                  </Box>
                                  
                                  <Box alignItems='center' justifyContent='center' w={"55px"} h={"55px"}bg='rgba(233, 150, 240, 1)' borderRadius='50'>
                                      <Avatar  size="48px" source={{
                                      uri: item.avatarUrl
                                  }} />
                                  </Box>
                                  
                                  <Center><Text color="black" fontSize={'10px'} lineHeight={'24px'} fontWeight={500} fontFamily={'Poppins-Regular'}>
                                      {item.fullName}
                                  </Text></Center>
                                  <Text fontWeight={400} fontSize='12px' lineHiegt='24px' fontFamily={'Poppins-Regular'} color="rgba(111, 114, 122, 1)" _dark={{
                                      color: "rgba(111, 114, 122, 1)"
                                  }}>
                                      {item.recentText}
                                  </Text>
                                  <Box  alignItems='center' justifyContent='center' borderRadius='50' bg={item.status === 'Active' ? "rgba(220, 251, 234, 1)" : item.status === 'Suspended' ? 'rgba(255, 236, 217, 1)' : item.status === 'Sacked' ? 'rgba(255, 221, 221, 1)' : 'rgba(216, 248, 255, 1)'} h={8} w={20} alignSelf="center">
                                      <Text color={item.status === 'Active' ? "rgba(36, 159, 93, 1)" : item.status === 'Suspended' ? 'rgba(255, 159, 67, 1)' : item.status === 'Sacked' ? 'rgba(234, 84, 85, 1)' : 'rgba(23, 193, 232, 1)'}>{item.status}</Text> 
                                  </Box>
                                  
                              </VStack>
                              
                          )
                      }}
                      />

    </View>
);

export default Repository;
