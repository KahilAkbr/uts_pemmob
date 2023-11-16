import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress} activeOpacity={0.75}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d4af37",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    borderRadius: 40,
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontFamily:'monospace',
    textTransform: "uppercase",
    fontWeight: "bold",
    color: '#FFFFFF'
  },
});

export default Button;
