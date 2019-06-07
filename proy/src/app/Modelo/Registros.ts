
export class Registro{
    constructor(
        public mega_agente_id:number,
        public user_group_id:number,
        public username:string,
        public dosFA:number,
        public agente:number,
        public backend:number,
        public password:string,
        public password2:string,
        public salt: string,
        public firstname:string,
        public lastname:string,
        public email:string,
        public code:number,
        public ip: number, 
        public status:number,
        public date_added:string,
        ){}
}

