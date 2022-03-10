import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-decimal-control-test',
  templateUrl: './decimal-control-test.component.html',
  styleUrls: ['./decimal-control-test.component.css']
})
export class DecimalControlTestComponent implements OnInit {
  number: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
