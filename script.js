const calendarInput = document.getElementById('calendar-input')
const calendarCard = document.getElementById('calendar-card')
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
const month = document.getElementById('month')
const year = document.getElementById('year')
const days = document.getElementById('days')

const monthArr = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর']

const curentMonth = new Date().getMonth()
const curentYear = new Date().getFullYear()

const convertNumber = (num) => {
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

month.innerHTML = monthArr[curentMonth]
year.innerHTML = convertNumber(curentYear)

for (let i = 0; i < startDay(); i++) {
    const node = document.createElement('p')
    days.appendChild(node)
}

for (let i = 0; i < daysInMonths(); i++) {
    const node = document.createElement('p')
    node.innerHTML = convertNumber(i + 1)
    days.appendChild(node)
}