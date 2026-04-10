import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export const getAllProducts = () => {
  return prisma.product.findMany();
};

export const getProductById = (id: number) => {
  return prisma.product.findUnique({ where: { id } });
};

export const createProduct = (data: { productName: string; price: number }) => {
  return prisma.product.create({ data });
};

export const updateProduct = (
  id: number,
  data: { productName?: string; price?: number }
) => {
  return prisma.product.update({ where: { id }, data });
};

export const deleteProduct = (id: number) => {
  return prisma.product.delete({ where: { id } });
};
