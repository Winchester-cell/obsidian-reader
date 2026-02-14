import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Header ],
  templateUrl: './app.html',
})
export class App {
}
