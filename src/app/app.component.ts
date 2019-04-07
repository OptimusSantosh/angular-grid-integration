import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  columnDefs = [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'}
    ];

    rowData = [];

    ngOnInit() {
      fetch('https://api.myjson.com/bins/15psn9')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
    }
}
