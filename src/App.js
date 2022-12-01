import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import bakeryData from "./data/bakery-data.json";
import {BakeryItem} from "./components/BakeryItem";
import {Grid} from "@mui/material";
import {Container} from "@mui/material";
import {blue, red} from "@mui/material/colors";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  const [finalPrice, setFinalprice] = useState(0);
  function handlePriceClick(input){
    setFinalprice(finalPrice + input)
  }

  const [cartList, setCartList] = useState([]);
  function addToCart(input1, input2) {
    setCartList(cartList.concat(input1))
    handlePriceClick(input2)
  }

  const [glutenChecked, setGlutenChecked] = useState(false);
  function checkGluten() {
      if (glutenChecked){setGlutenChecked(false)}
      else{setGlutenChecked(true)}
  }

    const [vegetarianChecked, setVegetarianChecked] = useState(false);
    function checkVegetarian() {
        if (vegetarianChecked){setVegetarianChecked(false)}
        else{setVegetarianChecked(true)}
    }

    const [veganChecked, setVeganChecked] = useState(false);
    function checkVegan() {
        if (veganChecked){setVeganChecked(false)}
        else{setVeganChecked(true)}
    }

    const [timeChecked, setTimeChecked] = useState(false);
    function checkTime(input) {
        if (timeChecked){setTimeChecked(false)}
        else{setTimeChecked(true)}
    }



  return (
    <div className="App">
      <header className={"HeaderTitle"}>My Recipe Catalog</header>
        <FormGroup className={'mainOptions'}>
            <FormControlLabel control={<Checkbox onChange={checkGluten}/>} label="Gluten-free" />
            <FormControlLabel control={<Checkbox onChange={checkVegetarian} />} label="Vegetarian" />
            <FormControlLabel control={<Checkbox onChange={checkVegan} />} label="Vegan" />
        </FormGroup>
      <Grid container justifyContent={"center"}>
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item} itemToCart={addToCart} glutenTag={glutenChecked}
          vegTag={vegetarianChecked} veganTag={veganChecked}/>
      ))}
      </Grid>

      <div>
        <h2>Your Current plan</h2>
        {/* TODO: render a list of items in the cart */}
          <p>Appetizers</p>
          <Grid container></Grid>
          <p>Main Course</p>
        <p>Items: {cartList}</p>
        <p>Total price: {finalPrice}</p>
      </div>
    </div>
  );
}

export default App;
