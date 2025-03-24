import ProductCard from "./product-card";

export interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
  id?: string | number;
}

const ProductList = ({ data, title, limit }: { data: Product[]; title?: string; limit?: number }) => {
    const limitData = limit ? data.slice(0, limit) : data;

    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                limitData.length > 0 ? (
                    limitData.map((product: Product, index: number) => (
                        <ProductCard key={product.id || product.slug || index} product={product} />
                    ))
                ) : (
                    <p>No products found</p>
                )
            }
            </div>
        </div>
    );
}

export default ProductList;