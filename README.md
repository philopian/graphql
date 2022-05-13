# Simple GraphQL example


- [Apollo Getting started](https://www.apollographql.com/docs/apollo-server/getting-started/)
- [Apollo Queries](https://www.apollographql.com/docs/react/data/queries/)
- [Apollo mutations](https://www.apollographql.com/docs/react/data/mutations/)
- [GraphQL Schema types](https://graphql.org/learn/schema/)
- [Update Apollo Cache after a mutation](https://dev.to/lucis/update-apollo-cache-after-a-mutation-and-get-instant-benefits-on-your-ui-1c3b)
- [react-hook-form docs](https://react-hook-form.com/api/)
- [Making mock data](https://www.mockaroo.com/)
- [Express](https://expressjs.com/en/starter/hello-world.html)



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
      name: "Heeel Wolrd", 
      email: "hell@off.com", 
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
