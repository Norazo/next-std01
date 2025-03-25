'use server';

import { Product } from "@/types";
import { productPerPage } from "@/lib/constants";
import { convertToPlainObject } from "@/lib/utils";
import { prisma } from "@/db/prisma";

export const createProduct = async (product: Product) => {
    try {
        const newProduct = await prisma.product.create({
            data: product,
        });
        return newProduct;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export async function getLatestProducts() {
    try {
        const latestProducts = await prisma.product.findMany({
            take: productPerPage,
            orderBy: {
                createdAt: 'desc',
            },
        });
        
        // Convert Decimal values to strings
        const plainProducts = convertToPlainObject(latestProducts);
        return plainProducts;
    } catch (error) {
        console.error(error);
        throw error;
    }
}