import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useUsers } from '../../context/UsersContext';
import { v4 as uuidv4 } from 'uuid'; //benzersiz id oluşturmak için

export default function Form() {

  const {setUsers} = useUsers();
  const [name,setName] = useState("");

  const handleSubmit = ()=>{

    if (!name) {
        return false;
    }

      setUsers((prev)=>[{ id:uuidv4(),name }, ...prev ]);
      setName("");
  }

  return ( //returnKeyType='go' telefonda klavyede git butonunun yazmasını sağlıyor, enter butonu yerine
    <View>
      <TextInput 
        style={styles.input} 
        returnKeyType='go' 
        value={name} 
        onChangeText={(txt)=>setName(txt)}
        onEndEditing={handleSubmit}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:2,
        width:"100%",
        height:40
    }
})