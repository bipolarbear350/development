import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

let description;
let image;
let title;
let altText;
let vegStatus = false;
let veganStatus = false;
let gluStatus = false;
let extLink;
let prepTime;
let time;

export function BakeryItem({item, itemToCart, glutenTag, vegTag, veganTag}) {
    description = item.description;
    image = item.image;
    title = item.name;
    altText = item.alt;
    gluStatus = item.gluten;
    vegStatus = item.vegetarian;
    veganStatus = item.vegan;
    extLink = item.link;
    prepTime = item.prepTime;
    time = item.time;


    let status = [false, false, false];

    if (glutenTag && vegTag && veganTag) {
        if (gluStatus && vegStatus && veganStatus) {
            return(createCard());
        }
    } else if (glutenTag && veganTag) {
        if (gluStatus && veganStatus) {
            return(createCard());
        }
    } else if (glutenTag && vegTag) {
        if (gluStatus && vegStatus) {
            return(createCard());
        }
    } else if (vegTag && veganTag) {
        if (vegStatus && veganStatus) {
            return(createCard());
        }
    } else if (glutenTag) {
        if (gluStatus) {
            return(createCard());
        }
    } else if (vegTag) {
        if (vegStatus) {
            return(createCard());
        }
    } else if (veganTag) {
        if (veganStatus) {
            return(createCard());
        }
    } else if (!glutenTag && !vegTag && !veganTag) {
        return(createCard());
    }

    function testAppend() {
        let labelList = "-"
        if (gluStatus) {labelList = labelList.concat("- Gluten-free -")}
        if (vegStatus) {labelList = labelList.concat("- Vegetarian -")}
        if (veganStatus) {labelList = labelList.concat("- Vegan -")}
        labelList = labelList.concat("-")
        return labelList;
    }

    function createCard() {
        return(
            <Card sx={{ width: 345 }}>
                <CardActionArea href={extLink}>
                    <CardMedia
                        component="img"
                        height="140"
                        image= {image}
                        alt= {altText}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {prepTime}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {">o<"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {testAppend()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardContent>
                    <Button onClick={() =>itemToCart(item)} variant="outlined">Add To Plan</Button>
                </CardContent>
            </Card>
        );
    }
}

