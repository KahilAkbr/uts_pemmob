import React, { Component } from "react";
import {Text,View,StyleSheet,ActivityIndicator,FlatList,TouchableOpacity,Dimensions,Image} from "react-native";

const windowWidth = Dimensions.get("window").width;

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getData() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json"
      );
      const json = await response.json();
      this.setState({ data: json.articles, isLoading : false });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount(){
    this.getData();
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
      <>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("NewsDetail", { data: item })}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{flexDirection:"column", justifyContent:'space-between'}}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
            <View style={{justifyContent:'center'}}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
            </View>
            
          </View>
        </TouchableOpacity>
        <View style={styles.itemBorder}></View>
      </>
    );
  };

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#AA0002" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    padding: 15,
    backgroundColor: "white",
  },
  itemBorder: {
    borderWidth: .7,
    borderColor: "#cccccc",
  },
  itemImage: {
    width: 120,
    height: 90,
    resizeMode:'cover'
  },
  itemTitle: {
    fontWeight:'500',
    fontSize: 14,
    width: windowWidth - 150,
    paddingRight: 15,
  },
  itemDate:{
    paddingRight: 15,
    fontSize: 12
  }
});