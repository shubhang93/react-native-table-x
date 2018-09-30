import {Dimensions} from 'react-native'

export default {
    calculateDimensionsRelativeToScreen: function (value, dimension = "width") {
        const {height, width} = Dimensions.get("window")
        return dimension === "width" ? ((value / 100) * width) : ((value / 100) * height)
    }
}