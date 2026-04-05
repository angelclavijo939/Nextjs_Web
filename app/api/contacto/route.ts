import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(req: NextRequest) {
  try {
    const { nombres, apellidos, correo, telefono, mensaje } = await req.json();

    if (!nombres || !apellidos || !correo || !telefono || !mensaje) {
      return NextResponse.json({ error: "Todos los campos son requeridos." }, { status: 400 });
    }

    const sql = neon(process.env.DATABASE_URL!);

    // Crear tabla si no existe
    await sql`
      CREATE TABLE IF NOT EXISTS clientes_web (
        id SERIAL PRIMARY KEY,
        nombres VARCHAR(100) NOT NULL,
        apellidos VARCHAR(100) NOT NULL,
        correo VARCHAR(150) NOT NULL,
        telefono VARCHAR(20) NOT NULL,
        mensaje TEXT NOT NULL,
        fecha TIMESTAMP DEFAULT NOW()
      )
    `;

    // Insertar contacto
    await sql`
      INSERT INTO clientes_web (nombres, apellidos, correo, telefono, mensaje)
      VALUES (${nombres}, ${apellidos}, ${correo}, ${telefono}, ${mensaje})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error guardando clientes_web:", error);
    return NextResponse.json({ error: "Error al guardar el mensaje." }, { status: 500 });
  }
}
