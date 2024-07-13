### To Test Locally
```
npm link js-bangla-datepicker
```

### Usage

```
import { jsBanglaDatepicker } from "js-bangla-datepicker"
import "js-bangla-calendar/dist/style.css"

// To create the datepicker
jsBanglaDatepicker.createCalendar()

// Listen a custom event to get the selected date
jsBanglaDatepicker.container.addEventListener('getDate', (evt) => {
    console.log(evt.detail)
})
```

### To Install

```
npm install js-bangla-datepicker
```
