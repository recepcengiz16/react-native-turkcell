import React,{useEffect,useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location_ = await Location.getCurrentPositionAsync({});
      setLocation(location_);
    })();
  }, []);

  if (errorMsg) {
    return <Text>{errorMsg}</Text>
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(location)}</Text>
      
      <MapView style={styles.map} 
        region={{
          latitude:location?.coords.latitude,
          longitude:location?.coords.longitude
        }}  
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
