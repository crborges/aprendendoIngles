export class Coracao{
   
    public cheio: boolean=true
    public urlCoracaoVazio: string ='' 
    public urlCoracaoCheio: string =''

    
    constructor(cheio:boolean, urlVazio:string ='', urlCheio:string=''){
            this.cheio=cheio
            this.urlCoracaoCheio ='/assets/coracao_cheio.png'
            this.urlCoracaoVazio ='/assets/coracao_vazio.png'

    }

    public exibeCoracao(): string {
        if(this.cheio){
            return this.urlCoracaoCheio
        }
        else{
            return this.urlCoracaoVazio
        }
    }
}