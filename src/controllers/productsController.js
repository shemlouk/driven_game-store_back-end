import { productSchema } from "../schemas";
import { PRODUCTS } from "../database";

export const create = (req, res) => {
  const { error } = productSchema.validate(req.body, { abortEarly: false });
  if (error) return res.status(422).json(error.details);
  const newProduct = req.body;
  try {
    PRODUCTS.insertOne(newProduct);
    res.status(201).send(newProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};
