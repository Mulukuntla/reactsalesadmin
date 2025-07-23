// Write your code at relevant places in the code below:

import React, { useState } from "react";
import Products from "./Products";


const Form = (props) => {
  const [enteredProductId, setProductId] = useState("");
  const [enteredSellingPrice, setSellingPrice] = useState("");
  const [enteredProductName, setProductName] = useState("");
  const [enteredList,setEnteredList]=useState([])
  const [totalValue,setTotalValue]=useState(0)

  const productIdChangeHandler = (event) => {
    setProductId(event.target.value);
  };

  const sellingPriceChangeHandler = (event) => {
    setSellingPrice(event.target.value);
  };

  const productNameChangeHandler = (event) => {
    setProductName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const obj = {
      productId: enteredProductId,
      sellingPrice: enteredSellingPrice,
      productName: enteredProductName,
    };
    setTotalValue(totalValue+parseInt(enteredSellingPrice))
    //console.log(expenseData);
    console.log(obj)
    setEnteredList([...enteredList,obj])
    setProductId("");
    setSellingPrice("");
    setProductName("");
  };
  const aa=(list)=>{
    
    const ab=enteredList.filter((users)=>{
        
        return users.productId!=list.productId

    })
    console.log(list)
    
    setEnteredList(ab)
    setTotalValue(totalValue-list.sellingPrice)
    

  }
  
  return (
    <React.Fragment>
    <form onSubmit={formSubmitHandler}>
      
        <label htmlFor="productId">ProductId</label>
        <input
        type="text"
        value={enteredProductId}
        id="productId"
        onChange={productIdChangeHandler}
        />
    
    
        <label htmlFor="sellingPrice">selling Price</label>
        <input
        type="number"
        value={enteredSellingPrice}
        id="sellingPrice"
        onChange={sellingPriceChangeHandler}
        />
        <label htmlFor="productName">Product Name</label>
        <input
        type="text"
        value={enteredProductName}
        id="productName"
        onChange={productNameChangeHandler}
        />

    
        
    
    
    <button type="button" >Add</button>
    <button type="submit">Add Expense</button>
   
    
    </form>
    <Products listsEntered={enteredList} clickedbutton={aa}></Products>
    <p>total value {totalValue}</p>
    </React.Fragment>
  );
};

export default Form;
