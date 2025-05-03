// historico.model.ts
export interface IHistorico {
    id: number;
    usuario: string;         // Nome ou ID do usuário
    data: Date;              // Data da ação
    acao: string;            // Descrição da ação realizada
    entidade: string;        // Tipo de entidade (Banco, Agência, etc.)
  }
  