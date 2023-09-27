import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Category} from "./types";
import React from "react";

export type CategoriesSmallData = {
    onClick?: (id: string) => void;
    categories: Category[];
    selectedId?: string;
}

export function CategoriesSmall(props: CategoriesSmallData) {
    const getCategoryBackground = (category: Category, selectedId?: string) => {
        if (category.id === selectedId) {
            return "#000";
        }
        return "#FFF";
    }

    const getCategoryClass = (category: Category, selectedId?: string) => {
        if (category.id === selectedId) {
            return "CategorySelected";
        }
        return "Category";
    }

    const renderCategories = (data: CategoriesSmallData) => {
        const {categories, onClick, selectedId} = data;

        return categories.map((category: Category) => {
            return (
                <Col className="Col2"
                     style={{backgroundColor: getCategoryBackground(category, selectedId)}}
                     onClick={() => onClick && onClick(category.id)}
                     sm>
                    <div className={getCategoryClass(category, selectedId)} style={{padding: "5px", textAlign: "center"}}>{category.title}</div>
                </Col>
            )
        });
    }

    if (!props || !props.categories) {
        return null;
    }
    return (
        <Row xs={2} sm={3} md={3} lg={3} xl={6} xxl={6} style={{direction: "rtl"}}>
            {renderCategories(props)}
        </Row>
    );
}
