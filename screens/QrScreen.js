import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import Hyperlink from "react-native-hyperlink";

const QrScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState();
  const [qrData, setQrData] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={{ paddingTop: 20 }}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    setQrData(data);
    console.log(`Data : ${data}`);
    console.log(`Type : ${type}`);
  };
  return (
    <>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
      />
      {scanData && (
        <Pressable
          title="Scan Again?..."
          onPress={() => setScanData(undefined)}
          style={{ padding: 100, alignItems: "center" }}
        >
          <View style={{ backgroundColor: "white", padding: 20 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              SCAN AGAIN???
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={{ backgroundColor: "white" }}>
              <Hyperlink linkDefault={true}>
                <Text>{qrData}</Text>
              </Hyperlink>
            </View>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default QrScreen;

const styles = StyleSheet.create({});
