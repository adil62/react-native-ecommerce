import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import MenuIco from '../assets/icons/menu.png';
import Search from '../assets/icons/search.png';
import banner1 from '../assets/images/banners/1.jpg';
import banner2 from '../assets/images/banners/2.jpeg';
import banner3 from '../assets/images/banners/3.jpeg';
import banner4 from '../assets/images/banners/4.jpeg';

import cat1 from '../assets/images/categories/1.jpg';
import cat2 from '../assets/images/categories/2.jpg';
import cat3 from '../assets/images/categories/3.jpg';
import cat4 from '../assets/images/categories/4.jpg';
import cat5 from '../assets/images/categories/5.jpg';
import cat6 from '../assets/images/categories/6.jpg';

const Home = () => {
  const banners = [
    {key: 1, src: banner1},
    {key: 2, src: banner2},
    {key: 3, src: banner3},
    {key: 4, src: banner4},
  ];

  const categories = [
    {key: 1, src: cat1},
    {key: 2, src: cat2},
    {key: 3, src: cat3},
    {key: 4, src: cat4},
    {key: 5, src: cat5},
    {key: 6, src: cat6},
  ];

  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Image style={styles.headerIco} source={MenuIco}></Image>
            <Text style={styles.headerText}>MyCart</Text>
            <Image style={styles.headerIco} source={Search}></Image>
          </View>

          {/* Banner */}
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              snapToAlignment={'start'}
              decelerationRate={'fast'}
              data={banners}
              renderItem={({item}) => (
                <Image
                  source={item.src}
                  style={{
                    width: 353,
                    height: 250,
                    margin: 8,
                  }}
                />
              )}
            />
          </View>

          {/* Top categories */}
          <Text style={styles.topCategoryTxt}>Top categories</Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {categories.map((item) => (
              <Image
                style={{height: 100, flexBasis: '28%', marginBottom: 40}}
                key={item.key}
                source={item.src}></Image>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIco: {
    height: 40,
    width: 40,
  },
  headerText: {
    fontWeight: '700',
    color: '#a0188d',
    fontSize: 35,
    borderColor: '#FF0000',
  },
  topCategoryTxt: {
    fontWeight: '700',
    color: '#a0188d',
    fontSize: 25,
    borderColor: '#FF0000',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
export default Home;
