import sampleData from "@/sample-data";

import ProductList from "@/components/shared/product/product-list";

export const metadata = {
    title: 'Home',
};

const Homepage = async () => {
    console.log(sampleData);
    return (
        <>
            <ProductList data={sampleData.products} title="All Products" limit={4} />
        </>
    );
}

export default Homepage;