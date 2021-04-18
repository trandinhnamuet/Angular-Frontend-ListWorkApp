import { WorkDetailComponent } from './work-detail/work-detail.component';
import { ConfigComponent } from './config/config.component';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/list-work', pathMatch: 'full'},
  { path: 'list-work', component: ConfigComponent},
  { path: 'search-box', component: SearchBoxComponent },
  { path: 'work/:id', component: WorkDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
