import { Grid, List } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductList(props: any) {
    return (
        <>
            {/* { <List>{
            props.products.map((item:any)=>(
                <ProductCard key={item.id} ProductItem={item}></ProductCard>
            ))}
        </List>  */}
            <Grid container spacing={4}>
                {
                    props.products.map((item: any) => (
                        <Grid item xs={4}>
                            <ProductCard key={item.id} ProductItem={item}></ProductCard>
                        </Grid>

                    ))
                }
            </Grid>



        </>
    )
}