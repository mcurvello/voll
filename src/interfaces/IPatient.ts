export interface IPatient {
  cpf: string;
  nome: string;
  email: string;
  endereco: IAddress;
  senha: string;
  telefone: string;
  possuiPlanoSaude: boolean;
  planosSaude?: number[];
  imagem?: string;
}

export interface IAddress {
  cep: string;
  rua: string;
  numero: number;
  complemento?: string;
  estado: string;
}
