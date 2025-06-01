export interface Pago {
id: string;
usuario: string;
metodo: 'pago_movil' | 'transferencia';
monto: number;
referencia: string;
estado: 'pendiente' | 'confirmado' | 'rechazado';
razonRechazo?: string;
nombreTitular?: string;
cedulaTitular?: string;
bancoOrigen?: string;
fechaTransferencia?: string;
imagenBase64?: string;
}

