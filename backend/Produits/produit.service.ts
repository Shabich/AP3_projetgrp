import db from '../config/db';
import { Produit } from './produit.interfaces';

export class ProduitService {
  static async getAll(): Promise<Produit[]> {
    const [rows] = await db.query('SELECT * FROM t_produit');
    return rows as Produit[];
  }

  static async getById(id: number): Promise<Produit | null> {
    const [rows] : any = await db.query('SELECT * FROM t_produit WHERE id_t_produit = ?', [id]);
    return rows[0] as Produit || null;
  }

  static async create(produit: Produit): Promise<number> {
    const { nom_produit, description, forme, dosage, prix, laboratoire_fabriquant } = produit;
    const [result]: any = await db.query(
      'INSERT INTO t_produit (nom_produit, description, forme, dosage, prix, laboratoire_fabriquant) VALUES (?, ?, ?, ?, ?, ?)',
      [nom_produit, description, forme, dosage, prix, laboratoire_fabriquant]
    );
    return result.insertId;
  }

  static async update(id: number, produit: Produit): Promise<void> {
    const { nom_produit, description, forme, dosage, prix, laboratoire_fabriquant } = produit;
    await db.query(
      'UPDATE t_produit SET nom_produit = ?, description = ?, forme = ?, dosage = ?, prix = ?, laboratoire_fabriquant = ? WHERE id_t_produit = ?',
      [nom_produit, description, forme, dosage, prix, laboratoire_fabriquant, id]
    );
  }

  static async delete(id: number): Promise<void> {
    await db.query('DELETE FROM t_produit WHERE id_t_produit = ?', [id]);
  }
}
