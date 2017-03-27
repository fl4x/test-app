import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent, Contact } from './app.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { ContactComponentComponent } from './contact-list-component/contact-component.component';
import { GroupsComponentComponent } from './groups-component/groups-component.component';
import { ClocksComponentComponent } from './clocks-component/clocks-component.component';
import { Contact2Component } from './contact-list-component/contact2.component';
import { Contact3Component } from './contact-list-component/contact3.component';
import { Contact4Component } from './contact-list-component/contact4.component';

const appRoutes: Routes =
  [
    {
      path: 'contacts', component: ContactListComponentComponent, children: [
      {
        path: ':Ivan',
        component: ContactComponentComponent
      },
      {
        path: ':Ivan',
        redirectTo: '/Ivan',
        pathMatch: 'full'
      },
      {
        path: ':Vasyl',
        component: Contact2Component
      },
      {
        path: ':Vasyl',
        redirectTo: '/Vasyl',
        pathMatch: 'full'
      },
      {
        path: ':Bill',
        component: Contact3Component
      },
      {
        path: ':Vania',
        component: Contact4Component
      }
    ]
    },
    {
      path: 'groups', component: GroupsComponentComponent
    },
    {
      path: 'clocks', component: ClocksComponentComponent
    },
  ];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponentComponent,
    ContactComponentComponent,
    GroupsComponentComponent,
    ClocksComponentComponent,
    Contact2Component,
    Contact3Component,
    Contact4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
