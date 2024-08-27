export class Ocorrencia{
  id_ocorrencia: number
  n_maquina: string;
  cliente: string;
  image: string;
  operador:string;
  status: string;
  ugb: string;
  tpOcorrencia: string;
  tamanhoLote: string;
  turno: string;
  fk_produto: {
    fk_produto: string;
    nome: string;
  }
}
