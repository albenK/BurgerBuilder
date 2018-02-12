import NavigationItem from "./NavigationItem/NavigationItem";
import navigationItemsStyles from "./NavigationItems.css";
import React from "react";

const navigationItems = (props) => {
    return (
        <ul className={navigationItemsStyles.NavigationItems}>
            <NavigationItem link="/" isActive>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
}

export default navigationItems;