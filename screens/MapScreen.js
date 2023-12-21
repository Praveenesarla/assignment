import {
  StatusBar,
  Button,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [location, setLocation] = useState();
  const [address, setAddress] = useState("");
  const [show, setShow] = useState(false);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location:");
      console.log(currentLocation);
      setLat(currentLocation.coords.latitude);
      setLng(currentLocation.coords.longitude);
    };
    getPermissions();
  }, []);

  {
    /* const geocode = async () => {
    const geocodedLocation = await Location.geocodeAsync(address);
    console.log("Geocoded Address:");
    console.log(geocodedLocation);
  };
*/
  }

  {
    /* const reverseGeocode = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });

    console.log("Reverse Geocoded:");
    console.log(reverseGeocodedAddress);
  }
*/
  }

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" && StatusBar.currentHeight,
      }}
    >
      <MapView
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ height: "70%" }}
      ></MapView>
      <View>
        <Button title="Show Lat & Lng" onPress={() => setShow(true)} />
        {show && (
          <View>
            <Text>{`latitude : ${lat}`}</Text>
            <Text>{`longitude : ${lng}`}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
