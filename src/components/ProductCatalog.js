/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import ButtonComponent from './ButtonComponent';
class ProductCatalog extends Component {
  constructor(props) {
    super(props);
  }

  renderProducts = products => {
    return products.map((item, index) => {
      return (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>{item.name + ' - $' + item.price}</Text>
          <Image
            style={styles.itemImage}
            source={{
              uri: item.image,
            }}
          />
          <ButtonComponent
            item={item}
            onPressAdd={this.props.onPressAdd}
            onPressRemove={this.props.onPressRemove}
          />
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.itemContainer}>
            {this.renderProducts(this.props.products)}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ProductCatalog;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  itemContainer: {
    marginVertical: 20,
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#1F1F1F',
    width: '100%',
  },
  itemImage: {
    width: '90%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: 8,
  },
  itemText: {
    fontSize: 18,
    color: "#E2E2E2",
    textAlign: "center"
  },
});
