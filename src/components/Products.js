import React from "react";
import Button from "./Button";

const Products = (props) => {
    console.log(props.listsEntered)
    const a=(list)=>{
        console.log(list)
        props.clickedbutton(list)

    }

   return (
    <React.Fragment>
      <p>User List</p>
      <ul>
        {props.listsEntered.map((users)=>{
            return (
                
                <li key={users.productId}>{users.productId}-{users.sellingPrice}-{users.productName}-<Button type="button" Clicks={a} item={users}>click</Button>
                
                </li>
                
            )
        })}
      </ul>
    </React.Fragment>
  );
};

export default Products;