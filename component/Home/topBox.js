import { Fragment, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { CartBag } from "../common/cartBag";
import SearchButton from "../../assets/svg/searchButton";
import DropDownIcon from '../../assets/svg/dropDownChevron';

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

                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingTop: 5, }}>
                    <Text style={styles.addressBoxtext}>Green Way 3000, Sylhet</Text>
                    <View><DropDownIcon /></View>
                </View>
            </View>
            <View>
                <Text style={styles.addressBoxHeading}>Within</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingTop: 5, }}>
                    <Text style={styles.addressBoxtext}>1 Hour</Text>
                    <View><DropDownIcon /></View>
                </View>
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
        fontSize: 10
    },
    addressBoxtext: {
        color: '#ffffff',
        fontSize: 12
    }
})