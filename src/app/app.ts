import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { register } from 'swiper/element/bundle';
import { Header } from './shared/components/header/header';

register();

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
})
export class App {
}
