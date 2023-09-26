import {CategoriesSmall} from "../../../components/CategoriesSmall";
import {dataConverter} from "../services/dataConverter";
import Container from 'react-bootstrap/Container';
import {businessData} from "../businessData";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

type Props = {
    selectedId: string;
    setSelectedId: (selectedId: string) => void;
}

export const HeaderTG = (props: Props) => {
    const {selectedId, setSelectedId} = props;

    const renderMainCategories = (selectedId: string) => {
        const categories = businessData.categories;
        const categoriesUiData = dataConverter.fromBusinessCategoriesToUiCategoriesItems(categories);

        return (
            <CategoriesSmall
                categories={categoriesUiData}
                selectedId={selectedId}
                onClick={(id: string) => {
                    setSelectedId(id);
                }}
            />
        );
    };

    return(
        <Container fluid>
            <Row style={{backgroundColor: "white", direction: "rtl", alignItems: "center", padding: "5px"}} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
                <Col md={4} lg={3} xl={3} xxl={2}>
                    <img style={{height: "100%", width: "100%", margin: "5px", backgroundColor: "transparent", maxHeight: "150px"}} src={"logo_tg_landscape.png"} />
                </Col>
                <Col md={7} lg={9} xl={9} xxl={10}>
                    {renderMainCategories(selectedId)}
                </Col>
            </Row>
        </Container>
    );
}
