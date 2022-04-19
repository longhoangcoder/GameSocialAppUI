import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <Text>LoginScreen</Text>
        <Button title='Click Here' onPress={()=>alert('Button Clicked!!')}/>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})