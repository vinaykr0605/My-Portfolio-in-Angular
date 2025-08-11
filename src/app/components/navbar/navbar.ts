import { Component, Input, Output, EventEmitter } from '@angular/core';
import { profile } from '@data/content'; // Adjust path as needed

@Component({
  selector: 'app-navbar',
  standalone: false,
  template: `
    <header class="sticky top-0 z-40 backdrop-blur bg-primary-50/70 dark:bg-primary-950/70 border-b border-primary-200 dark:border-primary-900">
      <div class="section flex items-center justify-between h-16">
        <a href="/" class="font-semibold">
          {{ profile.name }}
          <span class="text-secondary-600"> • </span>
          <span class="text-sm">{{ profile.title }}</span>
        </a>
        <nav class="flex items-center gap-4">
          <ng-container *ngFor="let item of nav">
            <a [href]="item.href" class="text-sm hover:text-secondary-600">
              {{ item.label }}
            </a>
          </ng-container>
          <button
            aria-label="Toggle dark mode"
            class="p-2 rounded text-gray-500 hover:bg-primary-100 dark:text-gray-400 dark:hover:bg-primary-800"
            (click)="toggleDarkMode()"
          >
            <ng-container *ngIf="dark; else moonIcon">
              <!-- SunIcon equivalent -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.364l-1.591 1.591M21 12h-2.25m-.364 6.364l-1.591-1.591M12 21v-2.25m-6.364-.364l1.591-1.591M3 12h2.25m.364-6.364l1.591 1.591M12 18a6 6 0 110-12 6 6 0 010 12z" />
              </svg>
            </ng-container>
            <ng-template #moonIcon>
              <!-- MoonIcon equivalent -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.567 0-10.128-4.561-10.128-10.128S6.433 1.5 12 1.5c1.893 0 3.668.51 5.168 1.406A7.5 7.5 0 0012 1.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c1.893 0 3.668-.51 5.168-1.406z" />
              </svg>
            </ng-template>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: ``
})
export class Navbar {
  @Input() dark: boolean = false;
  @Output() setDark = new EventEmitter<boolean>();

  profile = profile; // Make profile accessible in the template

  nav = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#recognitions', label: 'Recognitions' },
    { href: '#contact', label: 'Contact' }
  ];

  toggleDarkMode() {
    this.setDark.emit(!this.dark);
  }
}
