import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from "react"
import { dataContext } from "../dataProducts/DataProducts"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Producto() {
  const {data, buyProducts}= useContext(dataContext)

  return (
    <Card sx={{ maxWidth: 345 }}>
      {data.map((product)=>
    <>
      <CardHeader  key={product.id}
      action={
        <Typography variant="h5" color="textSecondary">
          {`$ ${product.price}`}
        </Typography>
      }
      title={product.name}
      subheader={product.stock}

    />
    <CardMedia
      component="img"
      height="194"
      image={product.img}
      alt="product1"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
    </CardContent> 
    <CardActions disableSpacing>
    <ShoppingCartIcon fontSize='large' onClick={()=>buyProducts(product)}/>
    </CardActions>   
    </> 
      )}     
    </Card>
  );
}