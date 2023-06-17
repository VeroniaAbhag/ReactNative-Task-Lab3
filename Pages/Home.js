import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  SectionList,
} from "react-native";
import styles from "../styles";
import { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native-web";
import routes from "../Routes/routes";

export default function App({ navigation }) {
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        {
          id: "0",
          text: "Ahmed",
          image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
        },
        {
          id: "1",
          text: "Ali",
          image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
        },
        {
          id: "2",
          text: "Amira",
          image: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
        },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        {
          id: "3",
          text: "Basem",
          image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
        },
        {
          id: "4",
          text: "Basma",
          image: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
        },
      ],
    },
    {
      id: "1",
      title: "C",
      data: [
        {
          id: "3",
          text: "Carol",
          image: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
        },
        {
          id: "4",
          text: "Coco",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6q4N2HVj-ZAtPgvPJksK_qQrggMY0QYfeUaV3rM&s",
        },
      ],
    },
  ];
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
      <Image source={item.image} style={{ width: 50, height: 50 }} />
      <Text style={{ marginLeft: 10 }}>{item.text}</Text>
      {/* <View>
        <TouchableOpacity style={styles.btn} title="See Details">
          <Text style={styles.btnTxt}>See Details</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.next}>
        <TouchableOpacity
          // style={styles.Homebtn}
          style={styles.Homebtn}
          onPress={() => navigation.navigate(routes.users)}
        >
          <Text style={{ color: "DFE8EF", fontWeight: "bold", margin: "2" , textAlign:'center' }}>
            Users Page
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section }) => (
            <Text style={styles.headerStyle}>{section.title}</Text>
          )}
          renderItem={renderItem}
        ></SectionList>
      </ScrollView>
    </SafeAreaView>
  );
}
