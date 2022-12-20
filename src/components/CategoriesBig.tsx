import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

export type Category = {
    id: string;
    title: string;
    backgroundColor?: string;
}

export type CategoriesBigData = {
    categories: Category[];
    onClick?: (id: string) => void;
    selectedId?: string;
}

function getCategoryBackground(category: Category, selectedId?: string) {
    if (category.id === selectedId) {
        return "#000";
    }
    return category.backgroundColor;
}

function renderCategories(props: CategoriesBigData) {
    const {categories, onClick, selectedId} = props;
    return categories.map((category: Category) => {
        return (
            <Col className="Col3"
                 style={{backgroundColor: getCategoryBackground(category, selectedId)}}
                 onClick={() => onClick && onClick(category.id)}
                 sm={4}>
                <div className="Category">{category.title}</div>
            </Col>
        )
    });
}

export function CategoriesBig(data: CategoriesBigData) {
    if (!data || !data.categories) {
        return null;
    }
    return (
        <Row xs={2}>
            {renderCategories(data)}
        </Row>
    );
}

export function renderCategoriesBigExample() {
    const categories = [
        {id: "0", title: "example1", backgroundColor: "#EF9A9A"},
        {id: "1", title: "example2", backgroundColor: "#F06292"},
        {id: "2", title: "example3", backgroundColor: "#AB47BC"},
        {id: "3", title: "example4", backgroundColor: "#673AB7"},
        {id: "4", title: "example5", backgroundColor: "#304FFE"},
        {id: "5", title: "example6", backgroundColor: "#00ACC1"},
    ];
    return (
        <CategoriesBig
            categories={categories}
            selectedId={"3"}
            onClick={(id: string) => {window.alert("id \"" + id + "\" click")}}
        />
    );
}