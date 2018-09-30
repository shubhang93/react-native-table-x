//@flow
import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native"
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import DataTableStore from "./DataTableStore";
import {inject, observer} from "mobx-react";
import FilterInput from "./FilterInput";


type DataTableProps = {
    data: Array<Object>,
    columns: Array<Object>
}

type DataTableState = {}
const store = new DataTableStore()


@inject("store")
@observer
class Table extends Component<DataTableProps> {

    onRowPress = ({rowData, rowIndex}) => {
        console.log({rowData, rowIndex})
    }

    componentDidMount() {
        let {data, columns} = this.props
        this.props.store.loadData(data, columns)
    }

    onSearchTextChange = text => {
        this.props.store.searchTextChanged(text)
    }

    render() {
        let {columns, data} = this.props
        return (
            <View style={styles.container}>
                <TableHeader headers={columns}/>
                <FilterInput
                    onTextChange={this.onSearchTextChange}
                    searchTextValue={this.props.store.searchText}/>
                <TableBody
                    data={this.props.store.visibleData}
                    columns={columns}
                    keyExtractor={"name"}
                    striped={true}
                    onRowPress={this.onRowPress}
                />
            </View>
        );
    }
}

export default Table

const styles = StyleSheet.create({
    container: {
        padding: 5
    }
})


