import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch, useSelector} from "react-redux";
import {changeDate} from "../../store/date.slice.js";
import {format} from "date-fns";
import {ko} from 'date-fns/locale/ko'
import Button from "../../components/button/Button.jsx";
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n.js";


const DatePick = () => {

    const { t } = useTranslation()
    const dates = useSelector((state) => state.date.selectedDate)
    const dispatch = useDispatch()

    // console.log(dates)

    const BTNS = [
        {
            id: 'Specific date',
            type: 'button',
            onClick: () => {}
        },
        {
            id: 'Inquiry',
            type: 'button',
            onClick: () => {}
        },
        {
            id: 'Stored',
            type: 'button',
            onClick: () => {}
        },
        {
            id: 'The Newest',
            type: 'button',
            onClick: () => {}
        },
        {
            id: 'The Oldest',
            type: 'button',
            onClick: () => {}
        }
    ]


    return (
        <div className='flex items-center justify-end'>
            {/*<DatePicker*/}
            {/*    className='border-1'*/}
            {/*    closeOnScroll={true}*/}
            {/*    locale={ko}*/}
            {/*    selected={dates}*/}
            {/*    onChange={(date) => dispatch(changeDate(format(date, 'yyyy-MM-dd')))}*/}
            {/*/>*/}
            <div className='flex items-center gap-12'>
                {
                    BTNS.map((btn) => {
                        return (
                            <div key={btn['id']}>
                                <Button {...btn} className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-8 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>{i18n.t(btn['id'])}</Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default DatePick
