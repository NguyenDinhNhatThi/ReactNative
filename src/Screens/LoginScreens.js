import {Box, Text, View,Input,Heading,Image,VStack } from "native-base";
import React from "react";
import Colors from "../color";
import { MaterialIcons } from '@expo/vector-icons';
import { IonIcons } from '@expo/vector-icons';
function LoginScreen(){
    return (
        <Box flex= {1} bg={Colors.black}>
            <Image
                flex ={1}
                alt="Logo" 
                resizeMode="cover"
                size = "lg"
                w="full"
                source={require("../../assets/cover.png")}
            />
 
            <Box
                W="full"
                h="full"
                position="absolute"
                top="0"
                px="6"
                justifyContent="center"
            >

                <Heading>Login</Heading>
                <VStack space={5} pt="6">
                    {/*Account */}
                    <Input
                        InputLeftElement={
                            <MaterialIcons name="email" size={20} color ={Colors.main}/>
                        }
                        variant="underlined"
                        placeholder=" user@gmail.com"
                        w="200"
                        color={Colors.main}
                        boderBottomColor={Colors.underline}
                    />
                    {/*Password */}
                    <Input
                        InputLeftElement={
                            <IonIcons name="eye" size={20} color ={Colors.main}/>
                        }
                        variant="underlined"
                        placeholder=" **********"
                        w="200"
                        pl={2}
                        type="password"
                        color={Colors.main}
                        boderBottomColor={Colors.underline}
                    />
                </VStack>
            </Box>
        </Box>

    )
}
export default LoginScreen;