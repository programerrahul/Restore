import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProductCard({ ProductItem }: any) {
    return (
        <>
            {/* <ListItem>
                    <ListItemAvatar>
                        <Avatar src={ProductItem.pictureUrl}></Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                    {ProductItem.name}-{ProductItem.price}
                    </ListItemText>
                </ListItem> */
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ProductItem.pictureUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {ProductItem.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {ProductItem.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>



            }
        </>
    )
}