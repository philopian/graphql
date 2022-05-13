import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { User } from "../types/users"
import { LOAD_USERS } from "../graphql/queries";

import styles from './UsersList.module.css'

export default function UsersList() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(data)
      setUsers(data.getAllUsers);
    }
  }, [data]);

  if (error) return <div>error loading users</div>
  if (loading) return <div>...loading</div>

  return (
    <div className={styles.wrapper}>
      <h1>Users</h1>
      {users.map((val: User) => {
        return <p key={val.id}> {val.name}</p>;
      })}
    </div>
  )
}