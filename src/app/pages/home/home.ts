import { Component, OnInit } from '@angular/core';
// ... other imports

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <app-navbar [dark]="dark" (setDark)="onSetDark($event)"></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-section id="experience" title="Experience">
        <app-experience></app-experience>
      </app-section>
      <app-section id="projects" title="Projects">
        <app-project></app-project>
      </app-section>
      <app-section id="skills" title="Skills">
        <app-skills></app-skills>
      </app-section>
      <app-section id="education" title="Education">
        <app-education></app-education>
      </app-section>
      <app-section id="recognitions" title="Recognitions">
        <app-recognition></app-recognition>
      </app-section>
      <app-section id="contact" title="Contact">
        <app-contact></app-contact>
      </app-section>
    </main>
    <app-footer></app-footer>
  `,
  styles: ``
})
export class Home implements OnInit {
  dark: boolean = false; // Default to false, will be set by system preference

  constructor() {
    // Initialize dark mode based on system preference
    this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', this.dark);
  }

  ngOnInit() {
    // No need to set initial dark mode here, already done in constructor
  }

  onSetDark(value: boolean) {
    this.dark = value;
    document.documentElement.classList.toggle('dark', this.dark);
  }
}
