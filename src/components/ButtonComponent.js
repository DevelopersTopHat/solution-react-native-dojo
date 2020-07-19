import React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// TODO: Fill out return for the button implementation exercise
const ButtonComponent = props => {
  return (
    <View style={styles.buttonContainer}>
      {/* This buttonWrapper is a workaround for iOS because the Icon element is acutually Text, which doesn't accept the borderRadius property. */}
      <View style={styles.buttonWrapper}>
        <Icon
          name="remove"
          size={30}
          color="white"
          onPress={() => {
            props.onPressRemove(props.item);
          }}
          style={styles.button}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Icon
          name="add"
          size={30}
          color="white"
          onPress={() => {
            props.onPressAdd(props.item);
          }}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default ButtonComponent;

// TODO
const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Allows the Icon to be a circle
  buttonWrapper: {
    borderRadius: 150,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#005457',
  },
});
