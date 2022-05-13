import {users, User} from "../data/users"

export default {
  Query:{
    getAllUsers(){
      return users
    }
  }, 
  Mutation:{
    createUser(parent:any, args:User){
      const newUser = args
      users.push(newUser)
      return newUser
    }
  }
}