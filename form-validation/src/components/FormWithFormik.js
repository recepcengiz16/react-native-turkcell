import { StyleSheet, TextInput, View, Button } from 'react-native'
import React,{useState} from 'react'

export default function FormWithFormik() {

    const [form, setForm] = useState({
        username:"",
        password:"",
        email:""
    })

    const handleChange = (text,input)=>{
        setForm((prev)=>({...prev,[input]:text}))
    }
    
    
    const handleSubmit = ()=>{
        if (!form.username) {
            return false;
        }
    }


  return (
    <View style={styles.container}>
        <View style={styles.item}>
            <TextInput style={styles.input} autoCapitalize='none' keyboardType='email-address' placeholder='Email' value={form.email} onChangeText={(email)=>handleChange(email,"email")} />
        </View>
        <View style={styles.item}>
            <TextInput style={styles.input} placeholder='Username' value={form.username} onChangeText={(name)=>handleChange(name,"username")} />
        </View>
        <View style={styles.item}>
            <TextInput style={styles.input} secureTextEntry placeholder='Password' value={form.password} onChangeText={(password)=>handleChange(password,"password")} />
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