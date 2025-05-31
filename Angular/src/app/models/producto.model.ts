export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen?: string;
  tipo?: string; // <-- deja esto como opcional si no lo usas siempre
  cantidad?: number;
}
