import React from "react";
import LineItem from "./LineItem";

const ItemList = ({state, handleClick, handleDeleteClick}) => {
    return (
        <ul>
        {state.map((item) => (
            <LineItem
                item={item}
                key={item.id}
                handleClick={handleClick}
                handleDeleteClick={handleDeleteClick}
            />
        ))}
      </ul>
    )
} 

export default ItemList