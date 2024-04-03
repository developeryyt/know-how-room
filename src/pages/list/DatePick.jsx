import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch, useSelector} from "react-redux";
import {changeDate} from "../../store/date.slice.js";
import {format} from "date-fns";
import { ko } from 'date-fns/locale/ko'


const DatePick = () => {

    const dates = useSelector((state) => state.date.selectedDate)
    const dispatch = useDispatch()

    console.log(dates)

    return (
        <DatePicker
            className='border-1'
            closeOnScroll={true}
            locale={ko}
            selected={dates}
            onChange={(date) => dispatch(changeDate(format(date, 'yyyy-MM-dd')))}
        />
    )
}

export default DatePick
