import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import for HTTP requests
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; // Correct module for lists
import { MatIconModule } from '@angular/material/icon'; // For icon buttons (if you want to add a toggle button)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: Apollo,
      useFactory: (httpLink: HttpLink) => {
        const client = new ApolloClient({
          link: httpLink.create({ uri: 'http://localhost:4000/graphql' }),
          cache: new InMemoryCache(),
        });
        return client;
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
