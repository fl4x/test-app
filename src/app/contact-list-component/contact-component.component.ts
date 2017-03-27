import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact'

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {
  // @Input selectedContact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
