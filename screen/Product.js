import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fragment, useEffect, useState } from 'react';

import BackChevron from '../assets/svg/backChevron';
import { CartBag } from '../component/common/cartBag';
import { RatingStarFull, RatingStarHalf } from '../assets/svg/ratingStar';
import { FavoriteIcon2 } from '../assets/svg/favouriteIcon';

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
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                {loading && <Text>Loading</Text>}
                {!loading && (
                    <Fragment>
                        <View style={styles.topRow}>
                            {/* back Button */}
                            <TouchableOpacity onPress={() => navigation.goBack()} >
                                <View style={styles.backButton} >
                                    <BackChevron />
                                </View>
                            </TouchableOpacity>

                            <View>
                                <CartBag navigation={navigation} borderColor="#fff" />
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

                        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>

                            {Array(5).fill(null).map((z, i) => {
                                if ((i + 0.5) < data?.rating && (i + 1) < data?.rating) {
                                    return <RatingStarFull key={i} color={'#F9B023'} />
                                }
                                if ((i + 0.5) < data?.rating) {
                                    return <RatingStarHalf key={i} />
                                }
                                return <RatingStarFull key={i} />
                            })}
                            {/* 
                            <RatingStarFull />
                            <RatingStarFull />
                            <RatingStarFull /> */}
                            {/* <RatingStarHalf /> */}
                            {/* <Text>{data?.rating}</Text> */}
                        </View>



                        <View style={styles.carousel}>

                            <TouchableOpacity style={{
                                position: 'absolute',
                                right: 10,
                                top: 10,
                                zIndex: 1,
                            }}>
                                <View style={{
                                    backgroundColor: '#fff',
                                    padding: 10,
                                    borderRadius: 15
                                }}>
                                    <FavoriteIcon2 />
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

                        <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginTop: 20, gap: 10, alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 24,
                                color: '#2A4BA0',
                                fontWeight: 800
                            }}>
                                ${data?.price}
                            </Text>
                            <View style={{
                                borderRadius: 20,
                                backgroundColor: '#2A4BA0',
                                paddingHorizontal: 10,
                                paddingVertical: 4,
                            }}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    color: '#fff',
                                }}>
                                    {data?.discountPercentage}% OFF
                                </Text>
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 20, marginVertical: 20 }}>
                            <TouchableOpacity style={{ flex: 1 }}>
                                <View style={{
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderColor: '#2A4BA0',
                                    paddingVertical: 20,
                                    borderRadius: 20,
                                }}>
                                    <Text style={{ color: '#2A4BA0' }}>Add to Cart</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flex: 1 }}>
                                <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    backgroundColor: '#2A4BA0',
                                    paddingVertical: 20,
                                    borderRadius: 20,
                                    borderColor: '#2A4BA0'
                                }}>
                                    <Text style={{ color: '#fff' }}>Buy Now</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: 600 }}>Detail</Text>
                            <Text style={{ color: '#8891A5', fontSize: 16 }}>{data?.description}</Text>
                        </View>
                    </Fragment>
                )}

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