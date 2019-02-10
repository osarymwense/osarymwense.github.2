
//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


//make a Component
const Header = (props) => {  //child component
  const { textStyle, viewStyle } = styles; //destructuring

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8', //off white color
    justifyContent: 'center', // always put comma
    alignItems: 'center',
    height: 90,
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, // higher will give darker shadow
    elevation: 2,
    position: 'relative'


  },
  textStyle: {
    fontSize: 20,
    color: 'green'
  }
};

//make the component available to other parts of the app
export { Header };
