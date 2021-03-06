import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-anchor-carousel';
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';
import {WebView} from 'react-native-webview';

const Home = () => {

    const [background, setBackground] = useState({
        uri: 'https://upload.wikimedia.org/wikipedia/en/7/7a/1917poster.jpg',
        name: '1917',
        stat: 'Drama/ War 1h 59m',
        desc: 'April 1917, the Western Front. Two British soldiers are sent to deliver an urgent message to an isolated regiment. If the message is not received in time the regiment will walk into a trap and be massacred. To get to the regiment they will need to cross through enemy territory. Time is of the essence and the journey will be fraught with danger.'
    })

    const [gallery, setgallery] = useState([
       { image: 'https://th.bing.com/th/id/OIP.RSIqty5jMDBj8syj2OT4zAHaLH?pid=Api&rs=1',
        title: 'Bad Boys',
        released: '2020',
        stat: 'Crime 2h 4m',
        desc: 'Marcus and Mike have to confront new issues (career changes and midlife crises), as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.',
        trailer: "https://www.youtube.com/embed/jKCj3XuPG8M"
    },
    {
        image: 'https://m.media-amazon.com/images/M/MV5BMTdkOTEwYjMtNDA1YS00YzVlLTg0NWUtMmQzNDZhYWUxZmIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        title: 'Spencer Confidential',
        released: '2020',
        stat: 'Action, Comedy, Crime 1h 51m',
        desc: 'Spenser (Mark Wahlberg) - an ex-cop better known for making trouble than solving it - just got out of prison and is leaving Boston for good. But first he gets roped into helping his old boxing coach and mentor, Henry (Alan Arkin), with a promising amateur. Thats Hawk (Winston Duke), a brash, no-nonsense MMA fighter convinced he ll be a tougher opponent than Spenser ever was. When two of Spenser s former colleagues turn up murdered, he recruits Hawk and his foul-mouthed ex-girlfriend, Cissy (Iliza Shlesinger), to help him investigate and bring the culprits to justice. From director Peter Berg, SPENSER CONFIDENTIAL is an action-comedy co-starring Bokeem Woodbine, Marc Maron and Austin Post.',
        trailer: 'https://www.youtube.com/embed/bgKEoHNi3Uc'
    },
    { image: 'https://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
        title: 'The Invisible Man',
        released: '2020',
        stat: 'Sci-fi 2h 4m',
        desc: 'The film follows Cecilia, who receives the news of her abusive ex-boyfriends suicide. She begins to re-build her life for the better. However, her sense of reality is put into question when she begins to suspect her deceased lover is not actually dead.',
        trailer: 'https://www.youtube.com/embed/Pso0Aj_cTh0'
    },
    { image: 'https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_SY1000_SX800_AL_.jpg://m.media-amazon.com/images/M/MV5BZjFhM2I4ZDYtZWMwNC00NTYzLWE3MDgtNjgxYmM3ZWMxYmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
        title: 'BloodShot',
        released: '2020',
        stat: 'Action, Drama, Sci-Fi 1h 49m',
        desc: 'Ray Garrison, an elite soldier who was killed in battle, is brought back to life by an advanced technology that gives him the ability of super human strength and fast healing. With his new abilities, he goes after the man who killed his wife, or at least, who he believes killed his wife. He soon comes to learn that not everything he learns can be trusted. The true question is: Can he even trust himself?',
        trailer: 'https://www.youtube.com/embed/BzOl5DpWO8k'
    },
    { image: 'https://m.media-amazon.com/images/M/MV5BNjg4MjRhZjgtNTIxOS00MmRjLTg4NTEtNjBkNzkwZjAxMjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
        title: 'The Hunt',
        released: '2020',
        stat: 'Horror 1h 30m',
        desc: 'Twelve strangers wake up in a clearing. They dont know where they are -- or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted, Crystal, turns the tables on her pursuers.',
        trailer: 'https://www.youtube.com/embed/sowGYbxTPgU'
    },
    { image: 'https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    title: 'Sonic The HedgeHog',
    released: '2020',
    stat: 'Action, Adventure, Comedy 1h 39m',
    desc: 'Based on the global blockbuster videogame franchise from Sega, SONIC THE HEDGEHOG tells the story of the worlds speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend Tom (James Marsden) team up to defend the planet from the evil genius Dr. Robotnik (Jim Carrey) and his plans for world domination. The family-friendly film also stars Tika Sumpter and Ben Schwartz as the voice of Sonic.',
    trailer:'https://www.youtube.com/embed/szby7ZHLnkA'
},
    ]);

    const carouselRef = useRef(null);

    const {width, height} = Dimensions.get('window');

    const renderItem = ({item, index}) => {
        return(
            <View>
                <TouchableOpacity
                    onPress={() => {
                        carouselRef.current.scrollToIndex(index);
                        setBackground({
                            uri: item.image,
                            name: item.title,
                            stat: item.stat,
                            desc: item.desc,
                            trailer: item.trailer                           
                        })
                    }}      
                >
                    <Image source={{uri: item.image}} style={styles.carouselImage} />
                    <Text style={styles.carouselText}>{item.title}</Text>
                    <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon}/>
                </TouchableOpacity>
            </View>
        )

    }

  return (
    <ScrollView style={{backgroundColor: '#000'}} >
      <View style={styles.carouselContentContainer}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
            <ImageBackground
                source={{uri: background.uri}}
                style= {styles.ImageBg}  
                blurRadius={10}        
            >
                <View style={styles.searchBoxContainer}>
                    <TextInput
                        placeholder= 'Search Movies'
                        placeholderTextColor= '#666'
                        style={styles.SearchBox}
                    />
                    <Feather name= 'search' size={22} color='#666' style={styles.searchBoxIcon}/>       
                </View>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10}}>Top Picks this week</Text>
                <View style={styles.carouselContainerView}>
                    <Carousel style={styles.Carousel} 
                        data={gallery}
                        renderItem={renderItem}
                        itemWidth= {200}
                        containerWidth={width - 20}
                        separatorWidth={0}
                        ref={carouselRef}
                        inActiveOpacity={0.4}
                    />
                </View>
                <View style={styles.movieInfoContainer}>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.movieName}>{background.name}</Text>
                        <Text style={styles.movieStat}>{background.stat}</Text>
                    </View>                  
                </View>
                <ScrollView style={{paddingHorizontal: 14, marginTop: 14}}>
                    <Text style={{color:'white', opacity: 0.8, lineHeight: 20}}>{background.desc}</Text>   
                </ScrollView>   
            </ImageBackground>
        </View>
      </View>
      <Text>{''}</Text>
      <View style={{marginHorizontal: 14}}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>Trailer</Text>
        <View style={{ height: 300 }}>
            <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: background.trailer }}
            />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', height:100}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>My List</Text>
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'normal'}}>View All</Text>
        </View>    
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
  carouselContentContainer: {
      flex: 1,
      backgroundColor: '#000',
      height: 720,
      paddingHorizontal: 14
  },
  ImageBg: {
      flex: 1,
      height: null,
      width: null,
      opacity: 1,
      justifyContent: 'flex-start'
  },
  searchBoxContainer: {
      backgroundColor: '#fff',
      elevation: 10,
      borderRadius: 4,
      marginVertical: 10,
      width: '95%',
      flexDirection: 'row',
      alignSelf: 'center'
  },
  SearchBox: {
      padding: 12,
      paddingLeft: 20,
      fontSize: 16
  },
  searchBoxIcon: {
      position: 'absolute',
      right: 20,
      top: 14
  },
  carouselContainerView: {
      width: '100%',
      height: 350,
      justifyContent: 'center',
      alignItems: 'center'
  },
  Carousel: {
      flex: 1,
      overflow: 'visible'
  },
  carouselImage: {
      width: 200,
      height: 320,
      borderRadius: 10,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.9)'
  },
  carouselText: {
      padding: 14,
      color: 'white',
      position: 'absolute',
      bottom: 10,
      left: 2,
      fontWeight: 'bold'
  },
  carouselIcon: {
      position: 'absolute',
      top: 15,
      right: 15

  },
  movieInfoContainer: {
      flexDirection: 'row',
      marginTop: 16,
      justifyContent: 'space-between',
      width: Dimensions.get('window').width - 14
  },
  movieName: {
      paddingLeft: 14,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 6
  },
 
  movieStat: {
      paddingLeft: 14,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
      opacity: 0.8
  },
  playIconContainer: {
      backgroundColor: '#212121',
      padding: 18,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
      borderWidth: 4,
      borderColor: 'rgba(2,173,148,0.2)',
      marginBottom: 14
  },
  WebViewContainer: {
 
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
 
  }
});

export default Home;
