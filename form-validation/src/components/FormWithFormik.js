import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'
import { useFormik } from 'formik';
import validations from './validation';

export default function FormWithFormik() {

    const {values,handleSubmit,handleChange,errors,handleBlur,touched} = useFormik({
        initialValues:{
            username:"",
            password:"",
            email:""
        },
        onSubmit:(values)=>{
            console.log(values)
        },
        validationSchema:validations
        //handleblur inputtan ayrıldığımız an, handleblur da tagden ayrılınca hata varsa göstersin. Diğer türlü bir yerde hata varsa daha diğerlerine geçmeden hepsinde gösteriyor.
        //touched da ayrıldığımız anda hataları objenin içine alıyor
    })


  return (
    <View style={styles.container}>


        <View style={styles.item}>
            <TextInput style={styles.input} autoCapitalize='none' keyboardType='email-address' placeholder='Email' value={values.email} onChangeText={handleChange("email")} onBlur={handleBlur("email")}/>
        
            {
                errors.email && touched.email && <Text>{errors.email}</Text>
            }
           
        </View>
        <View style={styles.item}>
            <TextInput style={styles.input} placeholder='Username' value={values.username} onChangeText={handleChange("username")} onBlur={handleBlur("username")} />

            {
                errors.username && touched.username && <Text>{errors.username}</Text>
            }

        </View>
        <View style={styles.item}>
            <TextInput style={styles.input} secureTextEntry placeholder='Password' value={values.password} onChangeText={handleChange("password")} onBlur={handleBlur("password")} />

            {
                errors.password && touched.password && <Text>{errors.password}</Text>
            }
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