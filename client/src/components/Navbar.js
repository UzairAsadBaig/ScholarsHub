import '../css/Navbar.css'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar, Divider, Dropdown, message } from 'antd'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const Navbar = props => {
  const [messageApi, contextHolder] = message.useMessage()

  const navigate = useNavigate()
  const { user } = useSelector(state => state.user)
  const [colorChange, setColorchange] = useState(false)
  const notifications = [
    {
      key: '1',
      label: <>
      <div style={{ paddingRight:"0.3rem", paddingBlock:"0.4rem", borderBottom:'1px solid rgb(245,245,245)'}}>
        <h6>Go now</h6>
        <small>reach foks okasodk</small> <small style={{marginLeft:'4rem', opacity:0.8}}>2h ago</small>
      </div>
      </>
    },
    {
      key: '2',
      label: <>
      <div style={{ paddingRight:"3rem", paddingBlock:"0.4rem", borderBottom:'1px solid rgb(245,245,245)'}}>
        <h6>Go now</h6>
        <small>reach foks okasodk </small>
      </div>
      </>
    }
  ]

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

  const logoutHandle = () => {
    Cookies.remove('jwt')
    messageApi.open({
      type: 'success',
      content: 'You have logged out successfully!'
    })
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  }
  const items = [
    {
      label: (
        <div onClick={() => navigate('/dashboard/settings')}>
          <SettingsIcon /> Settings
        </div>
      ),
      key: '0'
    },
    {
      type: 'divider'
    },
    {
      label: (
        <div onClick={logoutHandle}>
          <LogoutIcon /> Logout
        </div>
      ),
      key: '1'
    }
  ]
  return (
    <>
      {contextHolder}
      <nav
        style={{
          width: '84.99%',
          borderLeftColor: 'white',
          marginLeft: 'auto',
          paddingBlock: '1.07rem',
          borderBottom: '1px solid rgb(243,244,246)',
          position: 'fixed',
          top: 0,
          background: `${colorChange ? 'rgb(243,244,246)' : 'white'}`
        }}
        className='border-1 border-gray-100 px-2 dark:bg-gray-800 fixed top-0 left-0 right-0 z-30'
      >
        <div className='flex flex-wrap justify-end items-center mx-auto'>
          <div>
            <div className='search-box'>
              <button className='btn-search'>
                <SearchIcon />
              </button>
              <input
                type='text'
                className='input-search'
                placeholder='Type to Search...'
              />
            </div>
          </div>

          <div className='me-1'>
            <Dropdown
              menu={{
                items:notifications
              }}
            >
              <span>
              <NotificationsNoneIcon />
              </span>
            </Dropdown>
          </div>
          <div className='ms-3'>
            <ChatBubbleOutlineIcon />
          </div>

          <div className='mx-2'>
            <Divider type='vertical' />
          </div>
          <div className='me-2'>
            <Dropdown menu={{ items }}>
              <div>
                <span className='pe-2'>{user.name}</span>{' '}
                <Avatar size='large' icon={<PersonIcon />} />
              </div>
            </Dropdown>
          </div>
        </div>
      </nav>
    </>
  )
}
