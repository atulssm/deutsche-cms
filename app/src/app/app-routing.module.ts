import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PostApproveComponent } from './post-approve/post-approve.component';
import { PostBuilderComponent } from './post-builder/post-builder.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'post/:id', component: PostComponent},
  { path: 'create/:id', component: PostBuilderComponent, canActivate: [AuthGuardService] },
  { path: 'create', component: PostBuilderComponent, canActivate: [AuthGuardService] },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-approve', component: PostApproveComponent , canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
