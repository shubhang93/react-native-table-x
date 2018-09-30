import {action, computed, observable} from "mobx";
import actions from "./actions/actions";
import {SEARCH_MODE} from "./util/constants";

class DataTableStore {
    @observable gridData
    @observable searchText
    filterKeys = []


    constructor(options = {}) {
        this.options = options
    }

    @action(actions.LOAD_DATA)
    loadData(gridData, columns) {
        this.gridData = gridData
        this.setFilterKeys(columns)
    }


    setFilterKeys(columns) {
        this.filterKeys = columns.map(({name}) => name)
            .filter(key => key)
    }

    @action(actions.SEARCH_TEXT_CHANGED)
    searchTextChanged(searchText) {
        this.searchText = searchText
    }

    setSearchMode(mode = SEARCH_MODE.CASE_SENSITIVE) {
        this.options = {...this.options, searchMode: mode}
    }


    @action(actions.TEXT_INPUT_CHANGED)
    textInputChanged(value) {

    }

    evaluatePredicate(src, toCompare) {
        let {searchMode} = this.options
        if (searchMode === SEARCH_MODE.CASE_INSENSITIVE)
            return `${src}`.toLocaleLowerCase().includes(`${toCompare}`.toLocaleLowerCase())
        return `${src}`.includes(`${toCompare}`)
    }

    @computed get visibleData() {
        if (!this.searchText)
            return this.gridData
        return this.gridData.filter(ele => {
            let shouldSelect
            for (let idx in this.filterKeys) {
                let key = this.filterKeys[idx]
                shouldSelect = this.evaluatePredicate(ele[key], this.searchText)
                if (shouldSelect) break //use ! to perform AND search
            }
            return shouldSelect
        })
    }

    @computed get currentTableState() {
        return {
            gridData: this.gridData,
            searchText: this.searchText
        }
    }

    @computed get serialisedTableState() {
        return JSON.stringify({
            gridData: this.gridData,
            searchText: this.searchText
        })
    }

}

export default DataTableStore