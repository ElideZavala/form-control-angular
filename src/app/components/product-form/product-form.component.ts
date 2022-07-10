import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

   emailCtrl = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]);


   constructor() {
     // Observar los cambios.
     this.emailCtrl.valueChanges
     .pipe(
       debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    })
  }

  ngOnInit() {
  }

  // Obtener el Valor
  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value)
  }

}
