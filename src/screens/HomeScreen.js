/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import ProductCatalog from '../components/ProductCatalog';
import {connect} from 'react-redux';

import DataService from '../services/DataService';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../reducers/types';
class HomeScreen extends Component {
  static navigationOptions = {
    headerTitleContainerStyle: {
      // on Android the title doesn't center properly since there is no back button on this screen
      // This is an example of how platform specific styling can be done (although it is a bit scuffed since I did it on the fly)
      right: (Platform.OS === 'android') ? 0 : '15%'
    },
  };
  
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  async componentDidMount() {
    // Simulating retrieving data from an api
    const dataService = new DataService();
    const electronics = await dataService.getElectronicProducts();
    this.setState({products: electronics});
  }

  render() {
    return (
      <>
        {this.state.products && (
          <View>
            <ProductCatalog
              onPressAdd={this.props.addItemToCart}
              onPressRemove={this.props.removeItemFromCart}
              products={this.state.products}
            />
          </View>
        )}
      </>
    );
  }
}

// This hooks up the reducer to the prop functions
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch({type: ADD_TO_CART, payload: product}),
    removeItemFromCart: product => dispatch({type: REMOVE_FROM_CART, payload: product})
  };
};

/**
 * Not passing the reducer any state, so the first param is null
 */
export default connect(null, mapDispatchToProps)(HomeScreen);
