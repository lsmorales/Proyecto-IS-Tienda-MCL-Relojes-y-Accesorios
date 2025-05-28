export interface Pago {
id: string;
usuario: string;
metodo: 'pago_movil' | 'transferencia';
monto: number;
referencia: string;
estado: 'pendiente' | 'confirmado' | 'rechazado';
razonRechazo?: string;
  imagenBase64?: string; // ✅ Esta línea es la que faltaba
}



