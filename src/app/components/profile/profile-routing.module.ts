import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profile.component';

const profileroutes: Routes = [
  {
    path:'',
    component:ProfileComponent,
    children:[
      {
        path:'',
        redirectTo:'profiles'
      },
      {path:'profiles',
      component:ProfilesComponent
    },
    {
      path:'view/:id',
      component:ViewComponent
    }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(profileroutes)],
  exports: [RouterModule]
})
export class profileRoutingModule { }
