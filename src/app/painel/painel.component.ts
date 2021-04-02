import {Frase} from '../shared/frase.model'
import {FRASES}  from'./frases-mock'
import { Component, OnInit,EventEmitter , Output, OnDestroy} from '@angular/core'
@Component({
selector: 'ingles-painel',
templateUrl: './painel.component.html',
styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit , OnDestroy {

	public frases: Array<Frase> = FRASES
	public instrucao: string = "Traduza a Frase"
	public resposta: string =""
	public rodada : number = 0
	public rodadaFrase: Frase = new Frase('','')
	public fraseING: String =''
	public frasePTBR: String=''
	public progresso: number=0
	public tentativas: number =5 
	@Output() public encerrarJogo:EventEmitter<string> = new EventEmitter()
  
	constructor() {
		this.atualiRodada() 
	}

	public ngOnInit(): void { 
	}
	
	public ngOnDestroy():void{ 
	}
	public atualizaResposta(dados: Event):void{ 
		this.resposta=(<HTMLInputElement>dados.target).value 
	}
	
	public verificarResposta(): void {
		//atualiza a frase da rodada se a traducao esticvefr ceeta
		if (this.resposta==this.rodadaFrase.frasePTBR){
			//para testes
			//if (this.resposta=='1'){
			this.rodada++;
			if(this.rodada===this.frases.length){ 
				this.progresso=100
				this.encerrarJogo.emit('vitoria')
			}
			this.atualiRodada()
			this.progresso=this.progresso+Math.round((100/this.frases.length))
		}
		else{
			this.tentativas--
				if(this.tentativas===-1){
					this.encerrarJogo.emit('derrota')
				}
		}
	}
	
	public atualiRodada():void{
		//this.rodadaFrase = this.frases[this.rodada]
		// pega randomico
		this.rodadaFrase = this.frases[Math.floor(Math.random() * this.frases.length)]
		this.resposta=""
	}
}
