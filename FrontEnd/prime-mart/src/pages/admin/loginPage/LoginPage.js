import { memo } from 'react'
import "./loginPage.scss"
import { useNavigate } from 'react-router-dom'
import { ROUTERS } from 'utils'

const LoginPage = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(ROUTERS.ADMIN.ORDER)
    }

    return (
        <>
            <div className='login'>
                <div className='login-container'>
                    <h2 className='login-title'>Access the admin system</h2>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className='login-form__group'>
                            <label htmlFor='username' className='login-label'>
                                User Name
                            </label>
                            <input type='text' id='username' required name='username' />
                        </div>
                        <div className='login-form__group'>
                            <label htmlFor='password' className='login-label'>
                                Password
                            </label>
                            <input type='password' id='password' required name='password' />
                        </div>
                        <button type="submit" className='login-button'>
                            Login
                        </button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default memo(LoginPage);