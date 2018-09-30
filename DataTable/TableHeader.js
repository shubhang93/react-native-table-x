import {Col, Row} from "react-native-easy-grid";
import React from "react";
import {Text,StyleSheet} from 'react-native'
const TableHeader=props =>
    <Row style={styles.container}>
        {props.headers.map(
            ({title,width}) =>
                <Col key={title} style={styles.colStyle} size={width}>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                </Col>
        )}
    </Row>


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EDEDF4",
        height:40,
        borderBottomWidth: 2,
        borderBottomColor:"#4DBCE9"
    },
    headerText:{
        color:"#000000",
        fontWeight: "bold"
    },
    colStyle:{
        justifyContent: "center",
        alignItems: "center"
    }
})

export default TableHeader