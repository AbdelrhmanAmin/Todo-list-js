import Tform from './js/DOM/todo_form';
import Tdisplay from './js/DOM/todo_display';
import Gform from './js/DOM/group_form';
import Gdisplay from './js/DOM/group_display';
import getParam from './js/DOM/tools';
import Group from './js/logic/Group';

if (
  localStorage.getItem('groups') === null
  || JSON.parse(localStorage.getItem('groups'))[0] === undefined
  || window.localStorage.length === 0
) {
  localStorage.setItem('groups',
    JSON.stringify([new Group('Default', 'The general group where all created todos exist', []),
    ]));
}

const url = [];
const data = JSON.parse(localStorage.getItem('groups'));
for (let x = 0; x < data.length; x += 1) {
  url.push(data[x].title);
}
if (getParam() === '' || getParam() === ' ') {
  document.getElementById('content').innerHTML = '';
  Gform();
  Gdisplay();
}
if (url.includes(getParam().trim())) {
  document.getElementById('content').innerHTML = '';
  Tform();
  Tdisplay();
}
