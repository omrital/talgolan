import {CategoriesSmall} from "../../../components/CategoriesSmall";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

function renderMainCategories() {
    const categories = [
        {id: "0", title: "אולם תצוגה", backgroundColor: "#EF9A9A"},
        {id: "1", title: "פרוייקטים", backgroundColor: "#F06292"},
        {id: "2", title: "ברזל", backgroundColor: "#AB47BC"},
        {id: "3", title: "אינסטלציה", backgroundColor: "#673AB7"},
        {id: "4", title: "חומרי בניין", backgroundColor: "#304FFE"},
        {id: "5", title: "כלי עבודה", backgroundColor: "#00ACC1"},
    ];
    return (
        <CategoriesSmall
            categories={categories}
            selectedId={"3"}
            onClick={(id: string) => {window.alert("id \"" + id + "\" click")}}
        />
    );
}

export const Header = () => {
    return(
        <Container fluid>
            <Row style={{backgroundColor: "white", direction: "rtl", alignItems: "center", padding: "5px"}} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
                <Col md={4} lg={2} xl={2} xxl={2}>
                    <img style={{height: "100%", width: "100%", margin: "5px", backgroundColor: "transparent"}} src={"logo_tg_landscape.png"} />
                </Col>
                <Col md={7} lg={10} xl={10} xxl={10}>
                    {renderMainCategories()}
                </Col>
            </Row>
        </Container>
    );
}
