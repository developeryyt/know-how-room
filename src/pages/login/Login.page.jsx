import {useFormik} from "formik";




const LoginPage = () => {

    const formik = useFormik({
        initialValues: {
            userId: '',
            userPw: '',
        },
        validateOnBlur: false,
        onSubmit: async () => {

        }
    })

    return (
        <div className='login_wrapper make-center'>
            <div className='login'>
                <form onSubmit={e => {
                    e.preventDefault()
                    formik.handleSubmit()
                }}>

                    <div>
                        <input
                            id='userId'
                            name='userId'
                            value={formik.values.userId}
                            onChange={formik.handleChange}
                            placeholder='아이디를 입력해주세요.'
                            type='text'
                        />
                    </div>

                    <div>
                        <input
                            id='userPw'
                            name='userPw'
                            type='password'
                            value={formik.values.userPw}
                            onChange={formik.handleChange}
                            placeholder='비밀번호를 입력해주세요.'
                        />
                    </div>

                    <div>
                        <button type='submit'>로그인</button>
                    </div>

                </form>
            </div>
        </div>
    )
}


export default LoginPage