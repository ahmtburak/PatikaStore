import React from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import Product from './components/Product';

import patika_store_data from './patika_store_data.json';

function App() {
  const renderProduct = ({item}) => <Product products={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput placeholder="Ara..." style={styles.input}></TextInput>
      <FlatList
        data={patika_store_data}
        renderItem={renderProduct}
        numColumns={2}
        horizontal={false}
        showsVerticalScrollIndicator={false}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  title: {
    color: 'purple',
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#eceff1',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
