import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginLeft: 0,
    padding: 10,
    backgroundColor: '#eceff1',
    borderRadius: 10,
  },
  image: {
    marginBottom: 5,
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:5,
  },
  price: {
    fontWeight: 'bold',
    fontSize:16,
    marginBottom:3,
  },
  inStock:{
    color:"red",
    fontWeight:"bold",
    fontSize:17,
  }
});
