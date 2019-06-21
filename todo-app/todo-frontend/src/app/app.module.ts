import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { SpaceTopDirective } from './space-top.directive';
import { DonePipe } from './done.pipe';
import { DoneListenerDirective } from './done-listener.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SpaceTopDirective,
    DonePipe,
    DoneListenerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
