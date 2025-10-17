import UserSearch from '@/components/add-contact/UserSearch'
import OnlineUsers from '@/components/OnlineUsers'

export default function addContact() {
  return (
    <div className='grid grid-cols-[40%_60%] h-full items-center mt-5'>
      <div className=''>
        <OnlineUsers />
      </div>

      <UserSearch />
    </div>
  )
}
