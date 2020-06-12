import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './Components/search/search.component';
import { UserComponent } from './Components/user/user.component';


const routes: Routes = [
{path:'',component:SearchComponent},
{path:'posts/:id',component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
