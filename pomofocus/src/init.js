'use strict';

/*Change background color */

import { changeBg } from './handler/background.js';
import { starter } from './handler/starter.js';
// background
document.getElementById('time-btn-wrapper').addEventListener('click', changeBg);

//click start button
document.getElementById('start_button').addEventListener('click', starter);

/*render() {
    const buttonEl = document.createElement('button');
    buttonEl.innerHTML = 'START';
    buttonEl.classList.add('time-count-btn');
    buttonEl.id = 'start_button';
    buttonEl.style.color = 'hsl(2, 84%, 64%)';
    return buttonEl;
}*/
