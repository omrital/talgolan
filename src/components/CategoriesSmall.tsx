import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

export type Category = {
    id: string;
    title: string;
    backgroundColor?: string;
}

export type CategoriesSmallData = {
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

function renderCategories(data: CategoriesSmallData) {
    const {categories, onClick, selectedId} = data;
    return categories.map((category: Category) => {
        return (
            <Col className="Col2"
                 style={{backgroundColor: getCategoryBackground(category, selectedId)}}
                 onClick={() => onClick && onClick(category.id)}
                 sm>
                <div className="Category">{category.title}</div>
            </Col>
        )
    });
}

export function CategoriesSmall(props: CategoriesSmallData) {
    if (!props || !props.categories) {
        return null;
    }
    return (
        <Row xs={2} sm={3} md={3} lg={6} xl={6} xxl={6}>
            {renderCategories(props)}
        </Row>
    );
}

export function renderCategoriesSmallExample() {
    const categories = [
        {id: "0", title: "example1", backgroundColor: "#EF9A9A"},
        {id: "1", title: "example2", backgroundColor: "#F06292"},
        {id: "2", title: "example3", backgroundColor: "#AB47BC"},
        {id: "3", title: "example4", backgroundColor: "#673AB7"},
        {id: "4", title: "example5", backgroundColor: "#304FFE"},
        {id: "5", title: "example6", backgroundColor: "#00ACC1"},
    ];
    return (
        <CategoriesSmall
            categories={categories}
            selectedId={"3"}
            onClick={(id: string) => {window.alert("id \"" + id + "\" click")}}
        />
    );
}
