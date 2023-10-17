import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import bike from "@/assets/images/bike.png";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={20}
            color={Colors.mediumDark}
          ></Ionicons>
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons
              name="options-outline"
              size={20}
              color={Colors.primary}
            ></Ionicons>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.andriodSafe}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.bike} source={bike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Deliver Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>Location</Text>
            <Ionicons
              name="chevron-down"
              size={20}
              color={Colors.primary}
            ></Ionicons>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons
            size={20}
            name="person-outline"
            color={Colors.primary}
          ></Ionicons>
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#fff",
    display: "flex",
    gap: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  andriodSafe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  bike: {
    height: 30,
    width: 30,
  },
  searchContainer: {
    height: 80,
    backgroundColor: "#fff",
  },
  searchField: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 10,
  },
});
