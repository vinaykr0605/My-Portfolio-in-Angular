import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Section } from './components/section/section';
import { Experience } from './components/experience/experience';
import { Project } from './components/project/project';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Recognition } from './components/recognition/recognition';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';

@NgModule({
  declarations: [
    App,
    Navbar,
    Hero,
    Section,
    Experience,
    Project,
    Skills,
    Education,
    Recognition,
    Contact,
    Footer,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
