import {Box, Text, View,Input,Heading,Image,VStack } from "native-base";
import React from "react";
import Colors from "../color";


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
                    <Input
                        variant="underlined"
                        placeholder="user@gmail.com"
                        w="200"
                        color={Colors.main}
                        boderBottomColor={Colors.underline}
                    />
                </VStack>
            </Box>
        </Box>

    )
}
export default LoginScreen;