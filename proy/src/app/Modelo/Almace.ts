
export class Almacen{
    constructor(
        public no_parcela:number,
        public tipo:string,
        public desc_par:string,
        public norte:string,
        public sur:string,
        public este:string,
        public oeste:string,
        public noreste:string,
        public noroeste:string,
        public sureste: string,
        public suroeste:string,
        public fecha_alta:string,
        ){}
}



export class Almacen2{
  constructor(  
    public no_parcela:number,
    public tipo:string,
    public desc_par:string,
    public norte:string,
    public sur:string,
    public este:string,
    public oeste:string,
    public noreste:string,
    public noroeste:string,
    public sureste:string,
    public suroeste:string,
    public fecha_alta:Date,
    public id_municipio:number,
    public id_proveedor:number,
    public medidas:number,
    public user_id:number
    ){}
}


