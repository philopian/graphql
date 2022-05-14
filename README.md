# Simple GraphQL example

## Get started
1. Install packages
  ```shell
  $ cd client 
  $ yarn
  $ cd ../server
  $ yarn
  ```
2. Open 2 terminal
  - One for the `./client` & one for the `./server` 
  - both run:
    ```shell
    $ yarn dev
    ```



## Example query/mutation
- GraphQL query/mutations example
  ```graphql
  query GetAllUsers {
    getAllUsers {
      name
      age
    }
  }

  mutation  {
    createUser(
      id: "6", 
      name: "Hell Wolrd", 
      email: "hell@world.com", 
      age: 44, 
      gender: "male", 
      married: true
    ) 
    {
      name
      gender
    }
  }

  ```


## Links
- [Apollo Getting started](https://www.apollographql.com/docs/apollo-server/getting-started/)
- [Apollo Queries](https://www.apollographql.com/docs/react/data/queries/)
- [Apollo mutations](https://www.apollographql.com/docs/react/data/mutations/)
- [GraphQL Schema types](https://graphql.org/learn/schema/)
- [Update Apollo Cache after a mutation](https://dev.to/lucis/update-apollo-cache-after-a-mutation-and-get-instant-benefits-on-your-ui-1c3b)
- [Express](https://expressjs.com/en/starter/hello-world.html)
- [react-hook-form docs](https://react-hook-form.com/api/)
- [Making mock data](https://www.mockaroo.com/)



## Todo
- [x] server with TS + graphql + apollo + express
- [x] client that connects to the local instance of graphql
- [ ] server with TS + graphql + apollo + [lambda](https://www.apollographql.com/docs/apollo-server/deployment/lambda/)
- [ ] Yarn workspace
- [ ] Shared linting
- [ ] UI: when adding via the form load in the list
