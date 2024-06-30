const createCalendar = () => {
    const container = document.getElementById("container")
    container.innerHTML = `
    <input readonly id="calendar-input" type="text" placeholder="তারিখ সিলেক্ট করুণ">
    <img id="calendar-icon" src="./icons/calendar.svg" alt="calendar icon">

    <div id="calendar-card">
        <div id="card-header">
            <img id="left-arrow" src="./icons/leftArrow.svg" alt="left arrow">
            <div>
                <div id="month"></div>
                <div id="year"></div>
            </div>
            <img id="right-arrow" src="./icons/rightArrow.svg" alt="right arrow">
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
        calendarInput.value = evt.target.innerHTML + '/' + convertToBangla(curentMonth) + '/' + convertToBangla(curentYear)
        calendarCard.style.display = 'none'

        return curentYear + '-' + curentMonth + '-' + evt.target.value
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

    // calendarInput.addEventListener('blur', () => {
    //     calendarCard.style.display = 'none'
    // })
}

export { createCalendar }