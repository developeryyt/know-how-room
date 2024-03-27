import {useFormik} from "formik";
import {memo} from "react";




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
        <div className='login_wrapper make-center rounded-md p-20 border-1 shadow-lg'>
            <div className='login'>
                <form onSubmit={e => {
                    e.preventDefault()
                    formik.handleSubmit()
                }}>

                    <div className='flex flex-col'>
                        <h1>
                           KNOW-HOW
                        </h1>
                        <div className='pb-24'>
                            <label className='block pr-12 pb-4 text-14 font-500'>아이디</label>
                            <input
                                id='userId'
                                name='userId'
                                value={formik.values.userId}
                                onChange={formik.handleChange}
                                placeholder='아이디를 입력해주세요.'
                                type='text'
                                className='ipt'
                            />
                        </div>

                        <div className='pb-24'>
                            <label className='block pr-12 pb-4 text-14 font-500'>비밀번호</label>
                            <input
                                id='userPw'
                                name='userPw'
                                type='password'
                                value={formik.values.userPw}
                                onChange={formik.handleChange}
                                placeholder='비밀번호를 입력해주세요.'
                                className='ipt'
                            />
                        </div>

                        <div>
                            <button type='submit'>로그인</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}


export default memo(LoginPage)