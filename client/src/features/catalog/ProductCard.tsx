import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ ProductItem }: any) {
    return (
        <>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                    avatar={<Avatar sx={{bgcolor:'secondary.main'}}>
                        {ProductItem.name.charAt(0).toUpperCase()}
                    </Avatar>}
                    title={ProductItem.name}
                    titleTypographyProps={
                        {sx:{fontWeight:'bold',color:'primary.main'}}
                    }
                    />
                    <CardMedia
                        sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                        image={ProductItem.pictureUrl}
                        title={ProductItem.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="secondary">
                            ${(ProductItem.price/100).toFixed(2)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {ProductItem.brand} / {ProductItem.type}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add to cart</Button>
                        <Button size="small" component={Link} to={`/Catalog/${ProductItem.id}`}>View</Button>
                    </CardActions>
                </Card>
            
        </>
    )
}