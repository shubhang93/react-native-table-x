/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DataTable from "./DataTable/Main";
import generateData from "./DataTable/generateData";
import {SEARCH_MODE} from "./DataTable/util/constants";

const columns = [{
    name: "name",
    title: "Name",
    width: 30,
    alignColItem: "flex-start",
}, {
    title: "Age",
    width: 20,
    render: (data, index) => <Text style={{color: "red"}}>{data.age}</Text>,
    type: "textInput",
    autoBindProp: "age"
}, {
    name: "city",
    title: "City",
    width: 20,
}, {
    name: "state",
    title: "State",
    width: 20
}

]

let fakeData = generateData()

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{marginTop: 40}}>
                <DataTable
                    columns={columns}
                    data={fakeData}
                    trackBy={"name"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
