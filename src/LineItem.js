import React from "react";
import { FaTrash } from "react-icons/fa"

const LineItem = ({item, handleClick, handleDeleteClick}) => {
    return (
        <li className='item' key={item.id}>
            <input
                type='checkbox'
                checked={item.checked}
                onChange={() => handleClick(item.id)}
            ></input>

            <label
            style={(item.checked) ? 
            {textDecoration: 'line-through'} : null}
            onDoubleClick={() => handleClick(item.id)}
            >{item.comment}</label>   

            <FaTrash 
              role='button'
              tabIndex="0"
              onClick={() => handleDeleteClick(item.id)}
            />
        </li>
    )
}

export default LineItem