import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import for HTTP requests
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
