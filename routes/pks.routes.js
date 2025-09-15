import { Router } from "express";
const pksRouter = Router();

pksRouter.get("/", (req, res) => {
  res.send("Fungsi Akses semua PKS");
});

pksRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fungsi Akses PKS dengan ID: ${id}`);
});

// Delete all PKS
pksRouter.delete("/", (req, res) => {
  res.send("Fungsi Delete semua PKS");
});

// Delete PKS by ID
pksRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fungsi Delete PKS dengan ID: ${id}`);
});

// Edit PKS by ID
pksRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fungsi Edit PKS dengan ID: ${id}`);
});

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
