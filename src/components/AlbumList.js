// import React from "react";
// import { FlatList,SectionList } from "react-native";
// import AlbumDetail from "./HotAlbumDetail";
// import sections from "../json/album_section.json";

// const AlbumList = ({ list, navigation }) => {
//   const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
//   return (
//     <SectionList
//       horizontal={true}
//       sections={sections}
//       renderItem={renderItem}
//       keyExtractor={ item => item.title }
//       // renderSectionHeader={renderSectionHeader}
      
//     />
//     // <FlatList
//     //       data={list}
//     //       renderItem={renderItem}
//     //       keyExtractor={item => item.title}
//     //     />    
     
    
//     // <SectionList 
//     //   sections={sections}
//     //   contentContainerStyle={{ paddingHorizontal: 10 }}
//     //   stickySectionHeadersEnabled={false}
//     //   showsHorizontalScrollIndicator={false}
//     //   renderSectionHeader={renderSectionHeader}
//     //   renderItem={renderItem}
//     //   keyExtractor={ item => item.title }
//     // />
//   );  
// }

// export default AlbumList;

import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import AlbumDetail from "./AlbumDetail";
import HotAlbumDetail from "./HotAlbumDetail";
import sections from "../json/album_section.json";

const Albumlist = ({ list, navigation }) => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <HotAlbumDetail navigation album={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </>
  );
  const renderItem = ({ item, section}) => {
    if (section.horizontal) {
      return null;
    }
    return <AlbumDetail album={item} />
  };

  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    
  },
})

export default Albumlist;



