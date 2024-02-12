import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'
import { Formik,useFormik } from 'formik';

export default function FormWithFormik() {

    const {values,handleSubmit,handleChange} = useFormik({
        initialValues:{
            username:"",
            password:"",
            email:""
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })


  return (
    <View style={styles.container}>


        <View style={styles.item}>
            <TextInput style={styles.input} autoCapitalize='none' keyboardType='email-address' placeholder='Email' value={values.email} onChangeText={handleChange("email")} />
        </View>
        <View style={styles.item}>
            <TextInput style={styles.input} placeholder='Username' value={values.username} onChangeText={handleChange("username")} />
        </View>
        <View style={styles.item}>
            <TextInput style={styles.input} secureTextEntry placeholder='Password' value={values.password} onChangeText={handleChange("password")} />
        </View>
        <View>
            <Button title='Kaydet' onPress={handleSubmit} />
        </View>
    


       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        padding:10
    },
    input:{
        borderWidth:1,
        padding:10,
        fontSize:24,
        width:"100%",
        borderColor:"#999"
    },
    item:{
        marginBottom:8
    }
})