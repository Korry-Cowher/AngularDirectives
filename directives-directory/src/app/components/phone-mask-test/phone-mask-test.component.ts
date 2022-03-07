import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-mask-test',
  templateUrl: './phone-mask-test.component.html',
  styleUrls: ['./phone-mask-test.component.css']
})
export class PhoneMaskTestComponent implements OnInit {
  
  phoneNumber: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
