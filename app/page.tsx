import LoginUserForm from '@/components/users/LoginUserForm'
import UserForm from '@/components/users/UserForm'

export default function LogIn() {
  
  return (
    <LoginUserForm>
      <UserForm condition='log in'/>
    </LoginUserForm>
  )
}
