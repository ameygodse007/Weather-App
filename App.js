import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, Avatar } from "react-native-elements";
import Search from "./Screens/Search";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomePage: false,
      nyc: {},
      kolkata: {},
      london: {},
      API_KEY: "f766e7b0d7624cee84c1269c920768de",
      slides: [
        {
          data: {
            request: {
              type: "City",
              query: "New York, United States of America",
              language: "en",
              unit: "m",
            },
            location: {
              name: "New York",
              country: "United States of America",
              region: "New York",
              lat: "40.714",
              lon: "-74.006",
              timezone_id: "America/New_York",
              localtime: "2021-04-08 00:26",
              localtime_epoch: 1617841560,
              utc_offset: "-4.0",
            },
            current: {
              observation_time: "04:26 AM",
              temperature: 11,
              weather_code: 113,
              weather_icons: [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
              ],
              weather_descriptions: ["Clear"],
              wind_speed: 0,
              wind_degree: 141,
              wind_dir: "SE",
              pressure: 1019,
              precip: 0,
              humidity: 54,
              cloudcover: 0,
              feelslike: 10,
              uv_index: 1,
              visibility: 16,
              is_day: "no",
            },
          },
        },
        {
          data: {
            request: {
              type: "City",
              query: "New York, United States of America",
              language: "en",
              unit: "m",
            },
            location: {
              name: "London",
              country: "United States of America",
              region: "New York",
              lat: "40.714",
              lon: "-74.006",
              timezone_id: "America/New_York",
              localtime: "2021-04-08 00:26",
              localtime_epoch: 1617841560,
              utc_offset: "-4.0",
            },
            current: {
              observation_time: "04:26 AM",
              temperature: 11,
              weather_code: 113,
              weather_icons: [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
              ],
              weather_descriptions: ["Clear"],
              wind_speed: 0,
              wind_degree: 141,
              wind_dir: "SE",
              pressure: 1019,
              precip: 0,
              humidity: 54,
              cloudcover: 0,
              feelslike: 10,
              uv_index: 1,
              visibility: 16,
              is_day: "no",
            },
          },
        },
        {
          data: {
            request: {
              type: "City",
              query: "New York, United States of America",
              language: "en",
              unit: "m",
            },
            location: {
              name: "Pune",
              country: "United States of America",
              region: "New York",
              lat: "40.714",
              lon: "-74.006",
              timezone_id: "America/New_York",
              localtime: "2021-04-08 00:26",
              localtime_epoch: 1617841560,
              utc_offset: "-4.0",
            },
            current: {
              observation_time: "04:26 AM",
              temperature: 11,
              weather_code: 113,
              weather_icons: [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
              ],
              weather_descriptions: ["Clear"],
              wind_speed: 0,
              wind_degree: 141,
              wind_dir: "SE",
              pressure: 1019,
              precip: 0,
              humidity: 54,
              cloudcover: 0,
              feelslike: 10,
              uv_index: 1,
              visibility: 16,
              is_day: "no",
            },
          },
        },
      ],
      updated: false,
    };
    this.changeScreen = this.changeScreen.bind(this);
    this.searchCity = this.searchCity.bind(this);
  }

  getnyc() {
    const data = axios.get(
      "http://api.weatherstack.com/current?access_key=f766e7b0d7624cee84c1269c920768de&query=New%20York"
    );
    data.then((text) => {
      this.state.slides.push(text);
      this.state.slides.shift();
    });
  }

  getkolkata() {
    const datas = axios.get(
      "http://api.weatherstack.com/current?access_key=f766e7b0d7624cee84c1269c920768de&query=pune"
    );
    datas.then((text) => {
      this.state.slides.push(text);
      this.state.slides.shift();
    });
  }

  getlondon() {
    const datass = axios.get(
      "http://api.weatherstack.com/current?access_key=f766e7b0d7624cee84c1269c920768de&query=london"
    );
    datass.then((text) => {
      this.state.slides.push(text);
      this.state.slides.shift();
    });
  }

  searchCity = () => {
    // CODE GOES HERE
    this.getnyc();
    this.getlondon();
    this.getkolkata();
    this.setState({ updated: true });
    console.log(this.state.slides);
  };

  changeScreen() {
    if (this.state.showHomePage === false) {
      this.setState({
        showHomePage: true,
      });
    } else {
      this.setState({
        showHomePage: false,
      });
    }
  }
  _renderItem = ({ item }) => {
    return (
      <View key={item.data.location.name} style={styles.container}>
        <StatusBar translucent />

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 50,

            padding: 20,
          }}
        >
          <AntDesign
            onPress={this.changeScreen}
            name="search1"
            size={24}
            color="white"
          />
          <Button
            titleStyle={{ color: "white" }}
            containerStyle={{ color: "white" }}
            title="Update Weather"
            type="outline"
            onPress={this.searchCity}
          />
          <FontAwesome5 name="bars" size={24} color="white" />
        </View>
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
            source={{ uri: item.data.current.weather_icons[0] }}
          />
          <Text
            style={{
              paddingTop: 20,
              paddingRight: 20,
              paddingLeft: 20,
              fontSize: 29,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {item.data.location.name}
          </Text>
          <Text
            style={{
              color: "white",
              paddingLeft: 20,
              fontSize: 30,
            }}
          >
            {item.data.location.localtime}
          </Text>
          <Text
            style={{
              color: "white",
              paddingLeft: 20,
              fontSize: 15,
            }}
          >
            {item.text}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginBottom: 180,
          }}
        >
          <Text
            style={{
              fontSize: 80,
              color: "white",
              paddingTop: 20,
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            {item.data.current.temperature}°C
          </Text>
          <View
            style={{
              paddingLeft: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>
              {item.data.current.weather_descriptions[0]}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 20,
              alignItems: "center",
              height: 50,
              justifyContent: "center",
              borderBottomColor: "#e7e7de",
              borderBottomWidth: 1,
            }}
          />
        </View>
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
              {item.data.current.wind_speed}
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
            <Text style={{ color: "white" }}>Huidity</Text>
            <Text style={{ color: "white" }}>{item.data.current.humidity}</Text>
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
            <Text style={{ color: "white" }}>Wind</Text>
            <Text style={{ color: "white" }}>{item.data.current.pressure}</Text>
            <Text style={{ color: "white" }}>Pa</Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    if (this.state.showHomePage) {
      return (
        <Search
          changeScreen={this.changeScreen}
          showHomePage={this.state.showHomePage}
        />
      );
    } else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={this.state.slides}
          activeDotStyle={{
            backgroundColor: "#21465b",
            width: 30,
          }}
        />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101014",
    alignItems: "center",
    justifyContent: "center",
  },
});
