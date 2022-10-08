import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    primeiroValor='';
    segundoValor='';
    resultado = '';
    conta ='';

  

  constructor(private alertController: AlertController) {}

    async mostrarAlert() {
      if(this.primeiroValor != ''){
        const alert = await this.alertController.create({
          header: 'Resultado',
          message: `<b>Primeiro: </b> ${this.primeiroValor}
                    </br> <b>Segundo: </b> ${this.segundoValor}
                    </br> <b>Resultado: </b> ${this.resultado}`,
          buttons: ['Fechar'],
        });
          await alert.present();
      } else {
        return '<b>Campos Vazios</b>'
      }
  }

  async mostrarMaior() {

    const alert =  this.alertController.create({
      header: 'Resultado',
      message: `<b>Maior, </b> ${this.calculaMaior()}  `,
      buttons: ['Fechar'],
    });
        (await alert).present();
  }

  async mostrarMenor() {

    const alert =  this.alertController.create({
      header: 'Resultado',
      message: `<b>Menor, </b> ${this.calculaMenor()} `,
      buttons: ['Fechar'],
    });
        (await alert).present();
  }

  calculaMaior(){
     if(this.primeiroValor > this.segundoValor){
      return this.primeiroValor;
    }else if (this.primeiroValor < this.segundoValor){
      return this.segundoValor;
    }else {
      return '<b>são iguais!</b>';
    }
  }

  calculaMenor(){
    if(this.segundoValor > this.primeiroValor){
     return this.primeiroValor;
   }else if (this.segundoValor < this.primeiroValor){
    return this.segundoValor;
   }else {
    return '<b>são iguais!</b>';
   }
 }

  multiplicacao(){
    this.resultado =(parseFloat(this.primeiroValor) *parseFloat (this.segundoValor)).toString();
    this.conta = 'Multiplicação';
  }
  divisao(){
    this.resultado =(parseFloat(this.primeiroValor) /parseFloat (this.segundoValor)).toString();
    this.conta = 'Divisão';
  }
  subtrair(){
    this.resultado =(parseFloat(this.primeiroValor) -parseFloat (this.segundoValor)).toString();
    this.conta = 'Subtração';
  }

  soma(){
    this.resultado =(parseFloat(this.primeiroValor) +parseFloat (this.segundoValor)).toString();
    this.conta = 'Soma';
  }

  limpar(){
    this.primeiroValor = '';
    this.segundoValor ='';
    this.resultado ='';
    this.conta ='';
  }

}
