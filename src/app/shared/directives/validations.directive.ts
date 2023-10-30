import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidations]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidationsDirective, multi: true }]
})
export class ValidationsDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;
    if (!valor) {
      return { validations: 'O campo é obrigatório.' }; // Campo vazio não é válido
    }
    const padrao = /^[a-zA-Z0-9]+$/;
    if (padrao.test(valor)) {
      return null; // Valor é válido
    } else {
      return { validations: 'O campo deve conter apenas números e letras.' }; // Valor não é válido
    }
  }
}
