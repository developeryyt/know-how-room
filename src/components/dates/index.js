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

    constructor() {
        this.initCalendar()
        this.initDates()
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

    }

    initDates() {
        this.selectedDate = { ...this.#calendarDate }
    }

    nextMonth() {}

    prevMonth() {}

    prevYear() {}

    nextYear() {}

    updatesDate() {}


}

export default new DatePicker()