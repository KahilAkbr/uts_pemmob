import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions, Linking, ScrollView } from "react-native";
import {Separator, Button} from "../components/custom-component";

const windowWidth = Dimensions.get("window").width;

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.date}>{data.date}</Text>
            <Separator height={10} />
            <Image source={{ uri: data.image }} style={styles.image} />
            <View>
              <Separator height={15} />
              <Text style={styles.content}>{data.content}</Text>
            </View>
            <Separator height={15} />
          </View>
          <View style={styles.button}>
            <Button
              text="read more"
              onPress={() =>
                Linking.openURL(data.link).catch((err) =>
                  console.error("Error", err)
                )
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default NewsDetail;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: windowWidth - 30,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    fontSize: 14,
    textAlign: "justify",
  },
  date: {
    fontSize: 12,
    fontWeight: "300",
  },
  button: {
    justifyContent: "space-between",
  },
});
