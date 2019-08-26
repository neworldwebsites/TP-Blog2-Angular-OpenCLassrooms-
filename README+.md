# Angular

## EXERCICE

    post: {
      title: string,
      content: string,
      loveIts: number,
      created_at: Date
    } 
_____________

## Installation

    npm install -g @angular/cli

    (--skip-tests=true)
    ng new projectName --style=scss --directory .

    ng serve

    ng serve --open

* chrome extensions debugg: augury

_____________

## Extensions

    npm install bootstrap --save

    npm install rxjs-compat --save

>in angular.json > architect > style ADD:
````ts
           ],
            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.css"
            ],
````

_____________

## Imports

>in appmodule.ts:
````ts
import { FormsModule } from '@angular/forms';

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
````

> in new.component.ts -> Décorateur @input()
````ts
import { Component, Input, OnInit } from '@angular/core';

export class newComponent implements OnInit {
  // Propriétés
  @Input() newName: string;
````

_____________

## Components

    ng generate component mon-premier

    ng g c mon-premier

_____________

## Usage

* string interpolation : 

````html
  <h1>
    Welcome to {{ title }}!
  </h1>
````

* properties binding :

````html
    <button [disabled]="!isAuth">Tout Allumer</button>
````

* events binding : 

````html
    <button (click)="onAllumer()">Tout Allumer</button>
````

* liaison à double sens ( two-way binding ) : 

````html
 <input
  type="text"
  [(ngModel)]="appareilName">
````

> in app.module.ts :
````ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ]
})
````

* Décorateur @input() :

> dans appareil.component.ts
````ts
import { Component, Input, OnInit } from '@angular/core';

export class AppareilComponent implements OnInit {
  // Propriétés
  @Input() appareilName: string;
  appareilStatus = 'éteint';
````

> dans app.component.html
````html
      <ul class="list-group">
        <!-- by @input() -->
        <app-appareil appareilName="high-tech"></app-appareil>
        <app-appareil appareilName="mon coeur"></app-appareil>
        <app-appareil appareilName="mes tripes"></app-appareil>
        <!-- by properties blinding -->
        <app-appareil [appareilName]="appareilOne"></app-appareil>
        <app-appareil [appareilName]="appareilTwo"></app-appareil>
        <app-appareil [appareilName]="appareilThree"></app-appareil>
      </ul>
````

> dans app.component.ts
````ts
export class AppComponent {
  // propriétés
  appareilOne   = 'Machine à Laver un';
  appareilTwo   = 'Machine à Laver deux';
  appareilThree = 'Machine à Laver trois';
````

_____________

## Les Directives

Il existe une convention de nomenclature pour les méthodes liées aux événements que j'ai employée ici : "on" + le nom de l'événement. Cela permet, entre autres, de suivre plus facilement l'exécution des méthodes lorsque l'application devient plus complexe.

### Directive Structurelle

 * *ngIf :  pour afficher des données de façon conditionnelle

    *ngIf="condition"

````html
<li class="list-group-item">
  <div style="width:20px;height:20px;background-color:red;" 
       *ngIf="appareilStatus === 'éteint'"></div>
  <h4>Appareil : {{ appareilName }} -- Statut : {{ getStatus() }}</h4>
  <input type="text" class="form-control" [(ngModel)]="appareilName">
</li>
````

* *ngFor : pour itérer des données dans un array

    *ngFor="let obj of myArray"

````html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h2>Mes appareils</h2>
      <ul class="list-group">
        <app-appareil  *ngFor="let appareil of appareils"
                       [appareilName]="appareil.name"
                       [appareilStatus]="appareil.status"></app-appareil>
      </ul>
      <button class="btn btn-success"
              [disabled]="!isAuth"
              (click)="onAllumer()">Tout allumer</button>
    </div>
  </div>
</div>
````

````ts
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor() {
````

### Les directives par attribut

* ngStyle

````html
<h4 [ngStyle]="{color: getColor()}">Appareil : {{ appareilName }} -- Statut : {{ getStatus() }}</h4>
````

````ts
getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}
````

* ngClass

````html
<li [ngClass]="{'list-group-item': true,
                'list-group-item-success': appareilStatus === 'allumé',
                'list-group-item-danger': appareilStatus === 'éteint'}">
  <div style="width:20px;height:20px;background-color:red;"
       *ngIf="appareilStatus === 'éteint'"></div>
  <h4 [ngStyle]="{color: getColor()}">Appareil : {{ appareilName }} -- Statut : {{ getStatus() }}</h4>
  <input type="text" class="form-control" [(ngModel)]="appareilName">
</li>
````

_____________

## Modifiez les données en temps réel avec les Pipes

Les pipes (/pʌɪp/) prennent des données en input, les transforment, et puis affichent les données modifiées dans le DOM.  Il y a des pipes fournis avec Angular, et vous pouvez également créer vos propres pipes si vous en avez besoin.  Je vous propose de commencer avec les pipes fournis avec Angular.

````ts
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
````

````html
      <p>Mise à jour : {{ lastUpdate | async | date: 'EEEE d MMMM y' | uppercase }}</p>
      <!--  yMMMMEEEEd (E:jour)short -->
````

_____________
_____________

# OpenclassAngularWillalexander

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
