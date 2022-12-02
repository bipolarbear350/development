import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import bakeryData from "./data/bakery-data.json";
import {BakeryItem} from "./components/BakeryItem";
import {CartRecipe} from "./components/CartRecipe";
import {Grid} from "@mui/material";
import {Container} from "@mui/material";
import {blue, red} from "@mui/material/colors";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

bakeryData.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    } else {return 1}});

function App() {


  let [cartList, setCartList] = useState([]);
  function addToCart(input1) {
      if (!cartList.includes(input1)) {
          setCartList(cartList.concat(input1))
          updateCookingTime(input1.activeCookingTime)
      }

  }
    function removeFromCart(input1) {
        if (cartList.includes(input1)) {
            setCartList(cartList.filter(item => item !== input1))
            updateCookingTime(0 - input1.activeCookingTime)
        }

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
    function checkTime() {
        if (timeChecked){
            bakeryData.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                } else {return 1}});
            setTimeChecked(false)
        }
        else{
            bakeryData.sort(function(a,b){return a.time - b.time})
            setTimeChecked(true)
        }
    }

    const [howLongToMake, setHowLong] = useState(0);
    function updateCookingTime(input) {
        setHowLong(howLongToMake + input)
    }

  return (
    <div className="App">
      <header className={"HeaderTitle"}>My Recipe Catalog</header>
        <FormGroup className={'mainOptions'}>
            <FormControlLabel control={<Checkbox onChange={checkGluten}/>} label="Gluten-free" />
            <FormControlLabel control={<Checkbox onChange={checkVegetarian} />} label="Vegetarian" />
            <FormControlLabel control={<Checkbox onChange={checkVegan} />} label="Vegan" />
        </FormGroup>
        <FormGroup className={'mainOptions'}>
            <FormControlLabel control={<Checkbox onChange={checkTime} />} label="Sort by time" />
        </FormGroup>
      <Grid container justifyContent={"center"}>
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item} itemToCart={addToCart} glutenTag={glutenChecked}
          vegTag={vegetarianChecked} veganTag={veganChecked}/>
      ))}
      </Grid>

      <div>
        <h2>Your Current plan</h2>
          <Grid container justifyContent={"center"}>
              {cartList.map((item, index) => (
                  <CartRecipe item={item} itemFromCart={removeFromCart} glutenTag={glutenChecked}
                              vegTag={vegetarianChecked} veganTag={veganChecked}/>
              ))}
          </Grid>
      </div>
        <p>This plan will take about {howLongToMake} minutes to make</p>
        <p>Good Luck!</p>
    </div>
  );
}

export default App;
