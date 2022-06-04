import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostBuilderComponent } from './post-builder/post-builder.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostApproveComponent } from './post-approve/post-approve.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostBuilderComponent,
    PostListComponent,
    PostApproveComponent,
    LoginComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
