import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Components/search/search.component';
import { UserComponent } from './Components/user/user.component';
import { UsersService } from './Service/users.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './Service/posts.service';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }