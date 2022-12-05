import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { comparaValidator } from 'src/app/validators/compara-validator';
import { CpfValidator } from 'src/app/validators/cpf-validator';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome do Produto é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O campo Nome do Produto precisa ter pelo menos 3 caracteres.' }
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo Descrição do Produto é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O campo Descrição precisa ter pelo menos 3 caracteres.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório informar a validade do produto' },
      { tipo: 'minlength', mensagem: 'A validade deve ter pelo menos 6 caracteres.' },
    ],
    senha2: [
      { tipo: 'required', mensagem: 'O campo Preço do Produto é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O preço deve ter pelo menos 4 caracteres.' },
    ],
  };

  formRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      senha2: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)])],
    });
   }

  ngOnInit() {
  }

  salvarProduto(){
    console.log('Formulário: ', this.formRegistro.valid);
  }

}
