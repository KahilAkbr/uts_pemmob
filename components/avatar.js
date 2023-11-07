import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

class Avatar extends Component {
  render() {
    const { source } = this.props;

    return (
        <Image source={source} style={styles.avatar} />
    );
  }
}

const styles = StyleSheet.create({
    avatar:{
        width: 200,
        height: 200,
        borderRadius: 200/2,
        borderWidth: 2,
        borderColor: "#000000",
        alignSelf: "center",
    }
})

export default Avatar