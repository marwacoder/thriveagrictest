import * as React from 'react';
import { StyleSheet, View, FlatList as ReactNativeFlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as iconOnly from 'react-native-iconly'

import { SvgXml } from 'react-native-svg';


import { Center, Text, Box,Modal, AspectRatio, Avatar, Spacer, ScrollView, useBreakpointValue, List, Grid, Badge, IconButton, Heading, StatusBar, ChevronLeftIcon, HStack, VStack, FormControl, Input, useToast, Stack, Button, Icon, Image } from 'native-base'


const ModalComponet = (props) => {
const navigation = useNavigation()

console.log(props.githubs)

    return <Center>
      
        <Modal animationPreset='slide' isOpen={props.showModal} onClose={() => props.setShowModal(false)} size="lg">
            <Modal.Content h='259' bg='rgba(255, 255, 255, 1)' maxWidth="400">
                <Modal.CloseButton _icon={{
                    color:'black'
                }}/> 
               
                <Modal.Header>Github.com</Modal.Header>
                <Modal.Body>
                    <HStack>
                       
                    </HStack>
                    
                </Modal.Body>
               <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={()=> navigation.navigate('Repository', {
                  repository: props.githubs
              })}  bg='success.500' >
                repository
              </Button>
              <Button onPress={()=> navigation.navigate('Organisation')} bg='success.500'>
                organisation
              </Button>
            </Button.Group>
          </Modal.Footer>
            </Modal.Content>
        </Modal>

       
    </Center>;
};

export default ModalComponet;

const styles = StyleSheet.create({
  container: {}
});
