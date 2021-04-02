import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ingles-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})


export class ProgressoComponent implements OnInit {


//pegar parametro do pai
  @Input('progresso') public progresso : number =0
  



  constructor() {  }

  ngOnInit(): void { }

}
