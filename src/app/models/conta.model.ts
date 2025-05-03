

export interface IConta {
  id: number;
  agenciaId: number;
  usuarioId: number;
  saldo: number;
  tipo: TipoConta;
  possuiCartaoCredito?: boolean;
  saldoCartaoCredito?: number;
  possuiLIS?: boolean;
  saldoLIS?: number;
}
export enum TipoConta {
  NORMAL = 'NORMAL',
  ESPECIAL = 'ESPECIAL',
  PREMIUM = 'PREMIUM',
}