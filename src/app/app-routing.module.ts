import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path:'',
    component:GooglemapComponent
  },
  {
    path:'maps',
    component:GooglemapComponent
  },
  {
    path:'profile',
    // component:ProfileComponent
    loadChildren: () => import('././components/profile/profile.module').then(m => m.profileModule),
  },
  {
    path:'**',
    component:GooglemapComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
