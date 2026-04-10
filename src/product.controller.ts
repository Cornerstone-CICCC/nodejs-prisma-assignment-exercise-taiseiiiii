import { Request, Response } from "express";
import * as ProductModel from "./product.model.js";

export const getAll = async (_req: Request, res: Response) => {
  const products = await ProductModel.getAllProducts();
  res.json(products);
};

export const getById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const product = await ProductModel.getProductById(id);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }
  res.json(product);
};

export const create = async (req: Request, res: Response) => {
  const { productName, price } = req.body;
  const product = await ProductModel.createProduct({ productName, price });
  res.status(201).json(product);
};

export const update = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { productName, price } = req.body;
  const product = await ProductModel.updateProduct(id, { productName, price });
  res.json(product);
};

export const remove = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await ProductModel.deleteProduct(id);
  res.status(204).send();
};
