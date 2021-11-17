import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
interface Props {
    darkMode: boolean,
    handleThemeChange: () => void,

}
const midLinks = [
    { title: "Catalog", path: "/catalog" },
    { title: "About", path: "/About" },
    { title: "Contact", path: "/Contact" }];
const rightLinks = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/Register" },
]

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        <>
            <AppBar position="static" sx={{ mb: 4 }}>
                <Toolbar>
                    <Typography variant="h6" component={NavLink} to={"/"} sx={{ color: "inherit", textDecoration: "none" }}>
                        RE-STORE
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                    <List sx={{ display: 'flex' }}>
                        {
                            midLinks.map(
                                ({ title, path }) => (
                                    <ListItem component={NavLink} to={path} key={path}
                                        sx={
                                            {
                                                color: 'inherit',
                                                typography: 'h6',
                                                '&:hover': {color:'grey.500'},
                                                '&.active':{color:'text.secondary'}
                                            }
                                        } >
                                        {title.toUpperCase()}   
                                    </ListItem>
                                )
                            )
                        }
                    </List>
                    <IconButton size="large" sx={{ color: "inherit" }}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart></ShoppingCart>
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {
                            rightLinks.map(
                                ({ title, path }) => (
                                    <ListItem component={NavLink} to={path} key={path}
                                        sx={
                                            {
                                                color: 'inherit',
                                                typography: 'h6',
                                                '&:hover': {
                                                    color: 'grey.500'
                                                },
                                                '&.active':{color:'text.secondary'}
                                            }} >
                                        {title.toUpperCase()}
                                    </ListItem>
                                )
                            )
                        }
                    </List>
                </Toolbar>
            </AppBar>
        </>
    )
}