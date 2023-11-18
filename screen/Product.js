import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

import BackChevron from '../assets/svg/backChevron';

const width = Dimensions.get('window').width;

export default function Product({ navigation, route, }) {
    const { params } = route;
    const { id } = params;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProduct = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const result = await response.json();
            setData(result);
        } catch (err) {
            // console.log(err)
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

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

    const renderItem = (item) => {
        return (
            <View>
                <Image
                    style={{ width: width, height: 200, resizeMode: 'cover' }}
                    source={{ uri: item }}
                />
            </View>
        );
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>

                <View style={styles.topRow}>
                    {/* back Button */}
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <View style={styles.backButton} >
                            <BackChevron />
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text>Maroof</Text>
                    </View>
                </View>


                <View style={{ paddingHorizontal: 20 }}>
                    <Text numberOfLines={1} style={{ fontSize: 50, fontWeight: 200 }}>
                        {data?.brand}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{ fontSize: 50, fontWeight: 500 }}
                    >
                        {data?.title}
                    </Text>

                </View>


                <View style={styles.carousel}>
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


            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    backButton: {
        justifyContent: 'center',
        backgroundColor: '#F8F9FB',
        borderRadius: 50,
        alignItems: 'center'
    },

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
});