import { Fragment, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { CartBag } from "../common/cartBag";
import SearchButton from "../../assets/svg/searchButton";

export const HeaderBox = ({ navigation }) => {
    return (
        <View>
            <View style={styles.topRow}>
                <Text style={styles.welcomeText}>Hey,Rahul</Text>
                <CartBag navigation={navigation} color="#fff" />
            </View>
        </View>
    )
}

const SearchBox = () => {
    const [inputValue, setInput] = useState(null);

    return (
        <View style={styles.searchBoxContainer}>
            <View style={styles.searchInput} >
                <SearchButton />
                <TextInput
                    style={{ color: '#fff', width: '100%' }}
                    placeholderTextColor="#8891A5"
                    value={inputValue}
                    onChangeText={setInput}
                    placeholder="Search Product or Store" />
            </View>
        </View>
    )
}

const AddressBox = () => {
    return (
        <View style={styles.addressBoxContainer}>
            <View>
                <Text style={styles.addressBoxHeading}>Delivery to</Text>
                <Text style={styles.addressBoxtext}>MAroof</Text>
            </View>
            <View>
                <Text style={styles.addressBoxHeading}>Within</Text>
                <Text style={styles.addressBoxtext}>MAroof</Text>
            </View>
        </View>
    )
}

export default TopBox = () => {
    return (
        <Fragment>
            <SearchBox />
            <AddressBox />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    topRow: {
        backgroundColor: '#2A4BA0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 10,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 28
    },
    searchBoxContainer: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#2A4BA0'
    },
    searchInput: {
        padding: 10,
        color: '#ffffff',
        backgroundColor: '#153075',
        borderRadius: 50,
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 20,
    },
    addressBoxContainer: {
        paddingBottom: 15,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#2A4BA0'
    },
    addressBoxHeading: {
        color: '#F8F9FB',
        textTransform: 'uppercase',
        fontSize: 12
    },
    addressBoxtext: {
        color: '#ffffff',
        paddingTop: 5,
        fontSize: 18
    }
})