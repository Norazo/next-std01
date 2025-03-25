import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { productPerPage } from "@/lib/constants";

export const metadata = {
    title: 'Home',
};

const Homepage = async () => {
    const latestProducts = await getLatestProducts();
    return (
        <>
            <ProductList data={latestProducts} title="All Products" limit={productPerPage} />
        </>
    );
}

export default Homepage;