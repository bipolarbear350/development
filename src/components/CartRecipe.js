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

export function CartRecipe({item, itemFromCart, glutenTag, vegTag, veganTag}) {
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


    return createCard()

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
                            {prepTime}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardContent>
                    <Button onClick={() =>itemFromCart(item)} variant="outlined">Remove From Plan</Button>
                </CardContent>
            </Card>
        );
    }
}

