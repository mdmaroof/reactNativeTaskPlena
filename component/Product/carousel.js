import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { FavoriteIcon2 } from "../../assets/svg/favouriteIcon"
import { useState } from "react";
import { GetDataContext } from "../../context/mainContext";

const width = Dimensions.get('window').width;


export default Carousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const { fav, setFav } = GetDataContext();

    const favAdded = fav.some(z => z === data.id);

    const onScroll = (event) => {
        const offset = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(offset / width);
        setCurrentIndex(newIndex);
    };

    const renderDot = (index) => {
        const dotStyle = [styles.dot];
        if (currentIndex === index) {
            dotStyle.push(styles.dotSelected);
        }

        return (
            <View key={index} style={dotStyle} />
        );
    };

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < data?.images.length; i++) {
            dots.push(renderDot(i));
        }

        return (
            <View style={styles.dotsContainer}>
                {dots}
            </View>
        );
    };

    const renderItem = (item, index) => {
        return (
            <View key={index}>
                <Image
                    style={{ width: width, height: 200, resizeMode: 'cover' }}
                    source={{ uri: item }}
                />
            </View>
        );
    }

    fav

    return (
        <View style={styles.carousel}>

            <TouchableOpacity style={{
                position: 'absolute',
                right: 10,
                top: 10,
                zIndex: 1,
            }}
                onPress={() => {
                    if (favAdded) {
                        setFav(prev => prev.filter(z => z !== data.id))
                    } else {
                        setFav(prev => [...prev, data.id])
                    }
                }}
            >
                <View style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    borderRadius: 15
                }}>
                    <FavoriteIcon2 fill={favAdded && '#ff0000'} />
                </View>
            </TouchableOpacity>

            <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                scrollEventThrottle={16}
                onScroll={onScroll}
                showsHorizontalScrollIndicator={false}
            >
                {data?.images.map(renderItem)}
            </ScrollView>
            {renderDots()}
        </View>
    )
}

const styles = StyleSheet.create({
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    dot: {
        width: 20,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#F8F9FB',
        marginRight: 5,
    },
    dotSelected: {
        backgroundColor: '#F9B023',
    },
    carousel: {
        position: 'relative'
    }
})