import { FirstQuestComponent, PokemonModule } from './pokemon';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PokemonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-web';
  namesV2 = ['bulbasaur', 'charmander', 'squirtle','pikachu']
  selectedName = 'A'

  onChoose(name:string):void{
    console.log(name)
    this.selectedName = name;
  }
}
