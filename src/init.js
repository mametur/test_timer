'use strict';

/*Change background color */

import { changeBg } from './handler/background.js';
import { starter } from './handler/starter.js';
// background
document.getElementById('time-btn-wrapper').addEventListener('click', changeBg);

//click start button
document.getElementsByClassName('time-count-btn')[0].addEventListener('click', starter);
