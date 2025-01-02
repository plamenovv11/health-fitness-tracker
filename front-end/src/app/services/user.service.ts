import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getUserProfile() {
    return this.apollo.query({
      query: gql`
        query {
          userProfile {
            id
            name
            email
          }
        }
      `,
    });
  }
}
