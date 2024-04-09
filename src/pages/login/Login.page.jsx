import {useFormik} from "formik";
import {memo} from "react";
import {useNavigate} from "react-router-dom";




const LoginPage = () => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            userId: '',
            userPw: '',
        },
        validateOnBlur: false,
        validate: (values) => {
            const errors = {}

            if(!values.userId) {
                errors.userId = '필수 입력값입니다.'
            }

            if(!values.userPw) {
                errors.userPw = '필수 입력값입니다.'
            }

            return errors;

        },
        onSubmit: async (values, { setErrors }) => {
            const errors = formik.validateField({ ...values })
            setErrors(errors)

            if(Object.keys(errors).length === 0) {

                formik.resetForm()
            }

        }
    })

    const gotoSignupPage = () => {
        navigate('/signup')
    }



    return (
        <div className='login_wrapper make-center rounded-md p-20 shadow-lg min-w-[375px]'>
            <div className='login'>
                <form onSubmit={e => {
                    e.preventDefault()
                    formik.handleSubmit()
                }}>
                    <div className='flex flex-col'>
                        <h1 className='text-24 pb-24 font-[800]'>
                           KNOW-HOW
                        </h1>
                        <div className='pb-24'>
                            <div>
                                <label className='block pr-12 pb-5 text-14 font-500'>아이디</label>
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
                            {formik.errors.userId && <div className='text-red-500 text-xs'>*{formik.errors.userId}</div>}
                        </div>


                        <div className='pb-24'>
                            <div>
                                <label className='block pr-12 pb-5 text-14 font-500'>비밀번호</label>
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
                            {formik.errors.userPw && <div className='text-red-500 text-xs'>*{formik.errors.userPw}</div>}
                        </div>


                        <div className='pb-24 text-right'>
                            <span className='text-12 pr-2 text-gray-500'>혹시 아직 계정이 없으신가요?</span>
                            <button
                                className='text-14 border-b-1 border-b-blue-600 hover:border-b-red-700'
                                onClick={gotoSignupPage}
                                type='button'
                            >회원가입</button>
                        </div>

                        <div>
                            <button className='btn ty_submit' type='submit'>로그인</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}


export default memo(LoginPage)