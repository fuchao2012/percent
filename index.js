const Progress = require('progress')
let date = new Date()
let year = date.getFullYear()
let start = new Date(year + '-1-1').getTime()
let end = new Date(year + 1 + '-1-1').getTime()
let now = new Date().getTime()
let percent = ((now - start) / (end - start)).toFixed(4) * 100

let progress = new Progress(':bar', {
    total: 100,
    curr: percent,
    complete: '◼',
    imcomplete: '◻'
});
console.log('This year ' + percent + '% is fu*king gone!')
progress.tick()