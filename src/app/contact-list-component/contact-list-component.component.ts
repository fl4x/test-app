import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrls: ['./contact-list-component.component.css']
})

export class ContactListComponentComponent implements OnInit {
  selectedContact: string;

  public contact: Contact = {
    name: "Ivan",
    surname: "Pupkin",
    age: 47,
    group: "user",
    description: "Like coffee",
    note: ""
  };
  public contact2: Contact = {
    name: "Vasyl",
    surname: "Pupkin",
    age: 42,
    group: "admin",
    description: "Like coffee",
    note: ""
  };
  public contact3: Contact = {
    name: "Bill",
    surname: "Gates",
    age: 57,
    group: "user",
    description: "Like coffee",
    note: ""
  };
  public contact4: Contact = {
    name: "Vania",
    surname: "Ivanov",
    age: 21,
    group: "user",
    description: "Like coffee",
    note: ""
  };

  constructor(private route: ActivatedRoute, private router: Router) { };

  ngOnInit() {
  }

  onSelect() {
    this.router.navigate(['contacts/:Ivan']);
  }

  onSelect2() {
    this.router.navigate(['contacts/:Vasyl']);
  }

  onSelect3() {
    this.router.navigate(['contacts/:Bill']);
  }

  onSelect4() {
    this.router.navigate(['contacts/:Vania']);
  }
}
