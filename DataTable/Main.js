import React from "react";
import {Provider} from "mobx-react";
import DataTableStore from "./DataTableStore";
import Table from "./Table";

const store = new DataTableStore()

export default class DataTable extends React.Component {

    getDefaultStore() {
        let {searchMode} = this.props
        if (this.props.store) return this.props.store
        return new DataTableStore({searchMode})
    }

    render() {
        return (
            <Provider store={this.getDefaultStore()}>
                <Table
                    {...this.props}
                />
            </Provider>
        )
    }
}


