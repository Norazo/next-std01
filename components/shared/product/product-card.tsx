import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { convertToPlainObject } from "@/lib/utils";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
                <Link href={`/products/${product.slug}`}>
                    <Image src={product.images[0]} 
                        alt={product.name} 
                        width={300} 
                        height={300} 
                        priority={true} />
                </Link>
            </CardHeader>
            <CardContent className="p-4 grid gap-4">
                <div className="text-xs">{product.brand}</div>
                <Link href={`/products/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="flex-between gap-4">
                    <p>{Number(convertToPlainObject(product.rating))} Stars</p>
                    {product.stock > 0 ? (
                        <ProductPrice price={Number(product.price)} className="text-red-500" />
                    ) : (
                        <p className="text-destructive">Out of stock</p>
                    )}
                    <p>{product.numReviews} reviews</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductCard;