import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    
    <div class="w3-container">
      <h2>Welcome</h2>
      <div class="w3-bar w3-black">
        <a href="/home" class="w3-bar-item w3-button">HOME</a>
        <div class="w3-dropdown-hover">
          <button class="w3-button">PHOTOS</button>
          <div class="w3-dropdown-content w3-bar-block w3-card-4 w3-black">
            <a routerLink="/photos" class="w3-bar-item w3-button">MY PHOTOS</a>
            <a href="/clicks" class="w3-bar-item w3-button">MY CLICKS</a>
          </div>
        </div>

        <a href="/family" class="w3-bar-item w3-button">FAMILY</a>
        <a href="/details" class="w3-bar-item w3-button">DETAILS</a>
        <a href="/about" class="w3-bar-item w3-button">ABOUT</a>
        <div class="w3-dropdown-hover w3-right">
          <button class="w3-button">LOGIN</button>
          <div class="w3-dropdown-content w3-bar-block w3-card-4 w3-black">
            <a href="/login" class="w3-bar-item w3-button">LOGIN PAGE</a>
            <a href="/signup" class="w3-bar-item w3-button">SIGN-UP</a>
          </div>
        </div>
      </div>
      <br>
      <br>
      <br>
      <div class="qwert">
        <router-outlet></router-outlet>
      </div>
    </div>

  `
})
export class AppComponent {}
