import NewUserForm from '@/components/users/NewUserForm'
import UserForm from '@/components/users/UserForm'
import React from 'react'

export default function CreateUser() {
  return (
   <>
      <NewUserForm>
         <UserForm />
      </NewUserForm>
   </>
  )
}
