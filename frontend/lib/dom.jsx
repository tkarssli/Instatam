import React from 'react';

export const noScrollBody = (scroll) => {
    const body = document.getElementsByTagName('body')[0]
    body.style.top = `-${scroll}px`
    body.classList.add('no-scroll')
}

export const scrollBody = (scroll) => {
    const body = document.getElementsByTagName('body')[0]
    body.classList.remove('no-scroll')
    document.documentElement.scrollTop = scroll;
}