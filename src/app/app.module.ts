import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskComponent } from './tasks/task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    UserComponent,
    TaskComponent,
    NewTaskComponent,
  ], // we add our non stand alone components here, starting with the root component, in our case app-root
  bootstrap: [AppComponent], // this way we tell angular app that this is root component with which I want to start application
  imports: [BrowserModule, NgFor, FormsModule, NgIf, SharedModule], // here we add our stand alone components that are dependent on App Component, Shared
  //module added here to be sure that all the module isnide the shared module (exports) are also accessible
  // BrowserModule is required for app to work
})
export class AppModule {}
