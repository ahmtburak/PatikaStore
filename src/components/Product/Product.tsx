import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Product.style';

const Product = ({products}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: products.imgURL}}
        resizeMode="contain"></Image>
      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.price}>{products.price}</Text>    
      { products.inStock === false && <Text style={styles.inStock}>STOKTA YOK</Text>}
    </View>
  );
};

export default Product;
