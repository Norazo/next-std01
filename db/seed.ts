import { PrismaClient } from "@prisma/client";
import sampleData from "@/sample-data";

const seed = async () => {
    const prisma = new PrismaClient();

    await prisma.product.deleteMany();

    try {
        await prisma.product.createMany({
            data: sampleData.products,
        });
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
};

seed();
