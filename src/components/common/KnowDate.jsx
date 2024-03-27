import {DayPicker} from "react-day-picker";
import 'react-day-picker/dist/style.css';
import {ko} from "date-fns/locale/ko";
import {useEffect, useState} from "react";
import {format} from "date-fns";


const KnowDate = () => {

    const [selected, setSelected] = useState(new Date())


    useEffect(() => {
        console.log(format(selected, 'MM/dd/yyyy'))
    }, [selected]);


    return (
        <DayPicker
            captionLayout='dropdown'
            mode='single'
            fromYear={2001}
            toYear={2025}
            selected={selected}
            onSelect={setSelected}
            locale={ko}
        />
    );
};

export default KnowDate;
