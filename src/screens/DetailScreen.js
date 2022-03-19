import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking,TouchableOpacity } from 'react-native';

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    descriptions
  } = route.params;
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>

        <Text style={styles.titleStyle} >{title}</Text>
        <Text style={styles.artistStyle} >{artist}</Text>

        <Text 
        style={{
          lineHeight: 24,
          marginBottom:28,
          textAlign:'center'
        }}
        >{'\t'}{descriptions}</Text>

        {/* <Button 
          onPress={() => Linking.openURL(url)}
          title="Buy Now for $46.99"
          color='#6200EE'
        /> */}
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy Now for $46.99</Text>
        </TouchableOpacity>
          
      </View>
      <View style={styles.cardContainerStyle}>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  imageStyle: {
    height: 300,
    width: 210,
    marginHorizontal: 90,
    marginTop:16
  },
  cardContainerStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  titleStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',

  },
  artistStyle: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 20,
    color: '#666666',
    marginTop:8
  },
  button: {
    marginHorizontal: 85,
    backgroundColor: '#6200EE',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:50,
  },
  buttonText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
  }
});

export default DetailScreen;
