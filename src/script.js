class banglaDatepicker {
    constructor() {
        this.container = null
        this.getDate = new CustomEvent("getDate", {
            detail: {
                date: null,
            }
        });
    }
    createCalendar() {
        this.container = document.getElementById("container")
        this.container.innerHTML = `
            <input readonly id="calendar-input" type="text" placeholder="তারিখ সিলেক্ট করুণ">
            <svg
                id="calendar-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                >
                <path
                d="M15.5 3.83333V3.20833C15.5 1.715 14.285 0.5 12.7917 0.5H3.20833C1.715 0.5 0.5 1.715 0.5 3.20833V3.83333H15.5ZM0.5 5.08333V12.7917C0.5 14.285 1.715 15.5 3.20833 15.5H12.7917C14.285 15.5 15.5 14.285 15.5 12.7917V5.08333H0.5ZM4.45833 13C3.88292 13 3.41667 12.5337 3.41667 11.9583C3.41667 11.3829 3.88292 10.9167 4.45833 10.9167C5.03375 10.9167 5.5 11.3829 5.5 11.9583C5.5 12.5337 5.03375 13 4.45833 13ZM4.45833 9.25C3.88292 9.25 3.41667 8.78375 3.41667 8.20833C3.41667 7.63292 3.88292 7.16667 4.45833 7.16667C5.03375 7.16667 5.5 7.63292 5.5 8.20833C5.5 8.78375 5.03375 9.25 4.45833 9.25ZM8 13C7.42458 13 6.95833 12.5337 6.95833 11.9583C6.95833 11.3829 7.42458 10.9167 8 10.9167C8.57542 10.9167 9.04167 11.3829 9.04167 11.9583C9.04167 12.5337 8.57542 13 8 13ZM8 9.25C7.42458 9.25 6.95833 8.78375 6.95833 8.20833C6.95833 7.63292 7.42458 7.16667 8 7.16667C8.57542 7.16667 9.04167 7.63292 9.04167 8.20833C9.04167 8.78375 8.57542 9.25 8 9.25ZM11.5417 9.25C10.9662 9.25 10.5 8.78375 10.5 8.20833C10.5 7.63292 10.9662 7.16667 11.5417 7.16667C12.1171 7.16667 12.5833 7.63292 12.5833 8.20833C12.5833 8.78375 12.1171 9.25 11.5417 9.25Z"
                fill="#64748B"
                />
            </svg>
        
            <div id="calendar-card">
                <div id="card-header">
                    <svg
                        id="left-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                    >
                        <path
                        d="M7.20234 0.600391L8.33594 1.73399L3.06874 7.00039L8.33594 12.2668L7.20234 13.4004L0.802338 7.00039L7.20234 0.600391Z"
                        fill="black"
                        />
                    </svg>
                    <div>
                        <div id="month"></div>
                        <div id="year"></div>
                    </div>
                    <svg
                        id="right-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                    >
                        <path
                        d="M1.79766 13.4001L0.664062 12.2665L5.93126 7.0001L0.664062 1.7337L1.79766 0.600098L8.19766 7.0001L1.79766 13.4001Z"
                        fill="black"
                        />
                    </svg>
                </div>
        
                <div id="weeks">
                    <div>রবি</div>
                    <div>সোম</div>
                    <div>মঙ্গল</div>
                    <div>বুধ</div>
                    <div>বৃহস্প</div>
                    <div>শুক্র</div>
                    <div>শনি</div>
                </div>
        
                <div id="days">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            `
        const calendarInput = document.getElementById('calendar-input')
        const calendarCard = document.getElementById('calendar-card')
        const leftArrow = document.getElementById('left-arrow')
        const rightArrow = document.getElementById('right-arrow')
        const month = document.getElementById('month')
        const year = document.getElementById('year')
        const days = document.getElementById('days')

        const monthArr = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর']

        let curentMonth = new Date().getMonth()
        let curentYear = new Date().getFullYear()
        let day = 0

        const convertToBangla = (num) => {
            const bangNum = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
            var converted = ''

            if (isNaN(num)) {
                return converted
            }

            num = Number(num)
            num = num.toString()
            for (let i = 0; i < num.length; i++) {
                if (Number.parseInt(num[i]) || Number.parseInt(num[i]) === 0) {
                    converted += bangNum[num[i]]
                } else {
                    converted += num[i]
                }
            }

            return converted
        }

        const daysInMonths = () => {
            return new Date(curentYear, (curentMonth + 1), 0).getDate()
        }
        const startDay = () => {
            return new Date(curentYear, curentMonth, 1).getDay()
        }

        const selectedDate = (evt) => {
            day = evt.target.value
            calendarInput.value = evt.target.innerHTML + '/' + convertToBangla(curentMonth) + '/' + convertToBangla(curentYear)
            calendarCard.style.display = 'none'
            this.getDate.detail.date = curentYear + '-' + curentMonth + '-' + day
            container.dispatchEvent(this.getDate)
        }

        const setCalender = () => {
            month.innerHTML = monthArr[curentMonth]
            year.innerHTML = convertToBangla(curentYear)

            const nodes = days.children
            let space = 0
            let date = 0
            let spaceCount = startDay()
            let dates = daysInMonths()

            for (let el = 0; el < nodes.length; el++) {
                if (space < spaceCount) {
                    nodes[el].innerHTML = ''
                    space++
                } else if (date < dates) {
                    nodes[el].innerHTML = convertToBangla(date + 1)
                    nodes[el].value = date + 1
                    nodes[el].addEventListener("click", (evt) => selectedDate(evt))
                    date++
                } else {
                    nodes[el].innerHTML = ''
                }
            }
        }

        setCalender()

        rightArrow.addEventListener('click', () => {
            if (curentMonth >= 11) {
                curentMonth = 0
                curentYear++
            } else {
                curentMonth++
            }
            setCalender()
        })

        leftArrow.addEventListener('click', () => {
            if (curentMonth === 0) {
                curentMonth = 11
                curentYear--
            } else {
                curentMonth--
            }
            setCalender()
        })

        calendarInput.addEventListener('focus', () => {
            calendarCard.style.display = 'block'
        })
    }
}

const jsBanglaDatepicker = new banglaDatepicker()

export { jsBanglaDatepicker }