import {Component} from '@angular/core'


@Component({
    //selector: '.ingles-topo', usando um componente como uma class css
    //selector: '[ingles-topo]', usando como uma propriedade do HTML
    selector: 'ingles-topo',
    templateUrl :'./topo.componente.html',
    // template: '' define que seja escrio um template escrevendo aqui todo o codigo html do template
    styleUrls:['./topo.component.css']
    //styles: ['.exemplo {color:red}'] define que seja possivel criar inline os estilos da pagina

})

export class TopoComponent{

    public titulo: string ='Aprendendo Inglês'

    topo(): void{
        this.titulo='Novo valor'
        console.log('click no topo')
    }
}