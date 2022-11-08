import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layout/ShopLayout";
export default function Home() {
    return (
        <ShopLayout tittle="PepoShop - Home" pageDescription="...">
            <Typography variant="h1" component="h1">
                Tienda
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
                Todos los productos
            </Typography>
        </ShopLayout>
    );
}
