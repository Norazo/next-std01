import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))), "Invalid price format")

export const insertProductSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    slug: z.string().min(3, "Slug must be at least 3 characters long"),
    brand: z.string().min(3, "Brand must be at least 3 characters long"),
    category: z.string().min(3, "Category must be at least 3 characters long"),
    images: z.array(z.string()).min(1, "At least one image is required"),
    price: currency,
    stock: z.coerce.number(),
    description: z.string().min(3, "Description must be at least 3 characters long"),
    banner: z.string().nullable(),
    isFeatured: z.boolean(),
    numReviews: z.coerce.number(),
});

export type InsertProductSchema = z.infer<typeof insertProductSchema>;

export const updateProductSchema = insertProductSchema.omit({
    images: true,
});

export type UpdateProductSchema = z.infer<typeof updateProductSchema>;

export const searchProductSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
});

export type SearchProductSchema = z.infer<typeof searchProductSchema>;

export const filterProductSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
});

export type FilterProductSchema = z.infer<typeof filterProductSchema>;  