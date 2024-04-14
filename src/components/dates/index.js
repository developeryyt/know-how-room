import {makeAutoObservable} from "mobx";

class DatePicker {

    month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    day = [
        '일',
        '월',
        '화',
        '수',
        '목',
        '금',
        '토'
    ]

    yearSelect = []
    monthSelect = []

    #calendarDate = {
        dates: '',
        date: 0,
        month: 0,
        year: 0,
    };

    selectedDate = {
        dates: '',
        date: 0,
        month: 0,
        year: 0,
    };

    dateArr = [];

    constructor() {
        makeAutoObservable(this)
        this.initCalendar()
        this.yearOption()
        this.totalDay()
    }

    initCalendar() {
        const dates = new Date();
        const date = dates.getDate();
        const month = dates.getMonth();
        const year = dates.getFullYear()

        this.#calendarDate = {
            dates,
            date,
            month,
            year
        }

        this.selectedDate = { ...this.#calendarDate }
    }

    yearOption() {
        let first = this.selectedDate['year'] - 5;
        let last = this.selectedDate['year'] + 5;

        while(true) {
            if(first < last) {
                first++
                this.yearSelect.push(first)
            }else return false
        }
    }

    mothOption() {

    }

    prevMonth() {
        this.selectedDate = {
            ...this.selectedDate,
            month: this.selectedDate['month'] - 1,
        }
        this.updatesDate(this.selectedDate)
    }

    nextMonth() {
        this.selectedDate = {
            ...this.selectedDate,
            month: this.selectedDate['month'] + 1,
        }
        this.updatesDate(this.selectedDate)
    }


    prevYear() {
        this.selectedDate = {
            ...this.selectedDate,
            year: this.selectedDate['year'] - 1,
        }
        this.updatesDate(this.selectedDate)
    }

    nextYear() {
        this.selectedDate = {
            ...this.selectedDate,
            year: this.selectedDate['year'] + 1,
        }
        this.updatesDate(this.selectedDate)
    }

    updatesDate(dates) {
        this.selectedDate = { ...dates }
        this.totalDay()
    }

    totalDay() {
        this.dateArr = []
        let totalDay = new Date(this.selectedDate['year'], this.selectedDate['month'], 0).getDate()
        for(let i = 1; i <= totalDay; i++) {
            let a = new Date(this.selectedDate['year'], this.selectedDate['month'], i).getDay()
            this.dateArr.push({
                dd: i,
                ee: this.day[a]
            })

        }
        return this.dateArr;
    }

}
let DATES = new DatePicker();

export default DATES