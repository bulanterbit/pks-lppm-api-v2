import { Router } from "express";
const pksRouter = Router();

import {
  createPKS,
  getAllPKS,
  getPKSById,
  updatePKS,
  deletePKS,
} from "../controllers/pks.controller.js";

const router = Router();

// CREATE
router.post("/", createPKS);

// READ
router.get("/", getAllPKS); // semua PKS (dengan filter optional)
router.get("/:id", getPKSById); // detail PKS by ID

// UPDATE (PATCH lebih cocok untuk partial update)
router.patch("/:id", updatePKS);

// DELETE
router.delete("/:id", deletePKS);

// Edit file PKS (replace file lama)
pksRouter.put("/:id/file", (req, res) => {
  const { id } = req.params;
  const filePath = req.file.path;
  res.send(`File PKS ID: ${id} berhasil diupdate, path baru: ${filePath}`);
});

// Hapus file PKS
pksRouter.delete("/:id/file", (req, res) => {
  const { id } = req.params;
  res.send(`File PKS ID: ${id} berhasil dihapus`);
});

// Download file PKS
pksRouter.get("/:id/file", (req, res) => {
  const { id } = req.params;
  res.send(`Download file PKS ID: ${id}`);
});

export default pksRouter;
