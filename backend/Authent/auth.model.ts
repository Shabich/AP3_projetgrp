import pool from '../config/db';
import bcrypt from 'bcryptjs';

export const getUserByEmail = async (email: string): Promise<any> => {
  const [rows] = await pool.execute('SELECT * FROM t_user WHERE adresse_mail = ?', [email]);
  return (rows as any[])[0];
};

export const createUser = async (email: string, password: string): Promise<number> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const [result] = await pool.execute('INSERT INTO t_user (adresse_mail, password) VALUES (?, ?)', [email, hashedPassword]);
  return (result as any).insertId;
};
