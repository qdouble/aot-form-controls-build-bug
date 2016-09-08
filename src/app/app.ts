import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: './app.html'
})
export class App {
  label = 'Display Name';
  f = new FormGroup({
    displayName: new FormControl()
  });
}
