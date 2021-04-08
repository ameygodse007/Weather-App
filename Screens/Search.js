import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SearchBar, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      API_KEY: "f766e7b0d7624cee84c1269c920768de",
      response: {},
      switchbar: false,
    };
    this.login = this.login.bind(this);
  }
  searchCity = () => {
    // CODE GOES HERE
    this.getWeatherData(this.state.search)
      .then((data) => {
        this.setState({ response: data, switchbar: true });
        console.log(this.state.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getWeatherData = (city) => {
    const URL = "http://api.weatherstack.com/current?access_key=";
    //HINT: Use template literals to create a url with input and an API key
    const Full_URL = `${URL}${this.state.API_KEY}&query=${this.state.search}`;
    console.log(Full_URL);
    let url = fetch(Full_URL);
    return url.then((a) => {
      return a.json();
    });
    //CODE GOES HERE
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  login = () => {
    this.props.changeScreen();
  };
  render() {
    return this.state.switchbar === false ? (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent />
        <View style={{ flexDirection: "row", padding: 20 }}>
          <AntDesign
            style={{ marginTop: 15 }}
            onPress={this.login}
            name="back"
            size={24}
            color="white"
          />
          <Input
            value={this.state.search}
            placeholder="Type Here..."
            style={styles.formField}
            placeholderTextColor={"#888888"}
            onBlur={true}
            onChangeText={(text) => this.updateSearch(text)}
            returnKeyType="send"
          />
        </View>
        <View
          style={{
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            style={{ width: "40%" }}
            title="Search"
            onPress={(text) => this.searchCity(text)}
          />
        </View>
      </SafeAreaView>
    ) : (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#101014",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign
          style={{ marginTop: 15 }}
          onPress={this.login}
          name="back"
          size={24}
          color="white"
        />
        <View
          style={{
            marginTop: 30,
            backgroundColor: "#1F1F21",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            paddingBottom: 20,
            paddingTop: 15,
            flexDirection: "column",
          }}
        >
          <Avatar
            rounded
            style={{ height: 80, width: 80 }}
            source={{ uri: this.state.response.current.weather_icons[0] }}
          />
          <Text
            style={{
              paddingTop: 20,
              paddingRight: 20,
              paddingLeft: 20,
              fontSize: 80,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {this.state.response.location.name}
          </Text>

          <Text
            style={{
              color: "white",
              paddingLeft: 20,
              fontSize: 30,
            }}
          >
            {this.state.response.location.localtime}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 200,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "white",
              paddingTop: 20,
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            {this.state.response.current.temperature}°C
          </Text>
          <Text style={{ fontSize: 30, color: "white", paddingLeft: 10 }}>
            {this.state.response.current.weather_descriptions[0]}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 20,
            alignItems: "center",
            height: 50,
            width: "100%",
            justifyContent: "center",
            borderBottomColor: "#e7e7de",
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 100,
            marginTop: -150,
            marginBottom: 50,
            width: "100%",
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="wind" size={24} color="white" />
            <Text style={{ color: "white" }}>Wind</Text>
            <Text style={{ color: "white" }}>
              {this.state.response.current.wind_speed}
            </Text>
            <Text style={{ color: "white" }}>Km/h</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="ios-water-outline" size={24} color="white" />
            <Text style={{ color: "white" }}>Humidity</Text>
            <Text style={{ color: "white" }}>
              {this.state.response.current.humidity}
            </Text>
            <Text style={{ color: "white" }}>g/m3</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="meteor" size={24} color="white" />
            <Text style={{ color: "white" }}>Pressure</Text>
            <Text style={{ color: "white" }}>
              {this.state.response.current.pressure}
            </Text>
            <Text style={{ color: "white" }}>Pa</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    paddingTop: 30,
    position: "absolute",
    justifyContent: "flex-start",
    backgroundColor: "#393E42",
  },
  formField: {
    backgroundColor: "#F4F4F4",
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    fontSize: 18,
    height: 50,
  },
});
