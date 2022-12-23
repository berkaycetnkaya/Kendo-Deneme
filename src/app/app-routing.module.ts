import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnagridComponent } from './components/editpopup/anagrid/anagrid.component';




const routes: Routes = [
  {path:"",pathMatch:"full" ,component:AppComponent},
  {path:"anagrid",component:AnagridComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
