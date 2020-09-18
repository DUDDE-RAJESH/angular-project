import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

import{HeroService} from '../hero.service';
import{MessageService} from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero={
  //   id:1,
  //   name:'rajesh'  
  // };
 //  heroes=HEROES;
 selectedHero: Hero;

 heroes: Hero[];
  
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit()
   {
     this.getHeroes();
   }
    onSelect(hero: Hero): void {
    this.selectedHero=hero;
    this.messageService.add(`friend Selected friend id=${hero.id}   name=${hero.name}`);
  }
   getHeroes():void
   {
    // this.heroes=this.heroService.getHeroes();
      this.heroService.getHeroes()
      .subscribe(heroes=>this.heroes=heroes);
   }
  
  }
