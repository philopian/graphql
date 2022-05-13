import { useForm } from 'react-hook-form';
import { CREATE_USER_MUTATION } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

import { User } from '../types/users'
import styles from './Form.module.css'

export default function Form() {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<User>();

  const onSubmit = (formData: User) => {
    // Form Errors
    if (errors) console.log('[form errors]', errors)

    // Type cast
    formData.married = !!formData.married // make into boolean
    formData.age = Number(formData.age) // make into number
    
    // Post to the GraphQL server
    createUser({variables: {...formData}});

    // GraphQL Errors
    if (error) console.log(error);

    // Reset the form
    reset()
  }

  return <div className={styles.wrapper}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <input placeholder="id" type="string" {...register('id', { required: true })}/>
        {errors.id && <p>id is required.</p>}
      </>
      <>
        <input placeholder="name" type="text" {...register('name', { required: true })}/>
        {errors.name && <p>name is required.</p>}
      </>
      <>
        <input placeholder="email" type="text" {...register('email', { required: true })}/>
        {errors.email && <p>email is required.</p>}
      </>
      <>
        <input type="number" {...register('age', { required: true })}/>
        {errors.age && <p>age is required.</p>}
      </>
      <select {...register('gender', { required: true })}>
        <option value="">--Gender--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && <p>gender is required.</p>}


      <select {...register('married', { required: true })}>
        <option value="">--Married-</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      {errors.married && <p>married is required.</p>}

      <input type="submit" />
    </form>

    {loading && <div>...loading</div>}
    <div></div>
  </div>
}