#!/usr/bin/env node

var Progress = require('progress')
var date = new Date()
var year = date.getFullYear()
var start = new Date(year + '-1-1').getTime()
var end = new Date(year + 1 + '-1-1').getTime()
var now = new Date().getTime()
var percent = ((now - start) / (end - start)) * 100

var progress = new Progress(':bar', {
    total: 100,
    curr: 0,
    complete: '█',
    incomplete: '▒'
});

var timer = setInterval(function() {
    progress.tick()
    if (progress.curr == Math.ceil(percent)) {
        progress.interrupt('\n\nThis year ' + percent.toString().slice(0, 5) + '% is gone!\n')
        clearInterval(timer);
    } else if (progress.complete) {
        console.log('\n\nHappy new Year')
        clearInterval(timer);
    }
}, 50);