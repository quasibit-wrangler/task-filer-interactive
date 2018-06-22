/*lol here for github i add all the modals to the html
dynamiccall with innerHTML.
*/
 var newTaskModal =
 '<article class="modal genModal"> \
 <button> Who? </button> \
 <button> What? </button> \
 <button> Where? </button> \
 <button> When? </button> \
  \
 \
  <button id="closeModal"> |X| </button> \
 </article>';

var whoModal = ''; //list of names also write inss
var whatModal = ''; // picutres of material, quantity and type.
var whereModal = ''; // maybe image map? suggestions.
var whenModal = ''; // this is basically just a date.

/* === Event listeners
*/
window.addEventListener("load",function(){
  let plus = document.body.querySelector('#addTask');
  plus.addEventListener('click',taskModal); //opens the modal by adding it to the page.
});
/*=== end event listeners
*/


/*Add a new task!
This will open up the modal to the
new classes Who What Where When?
a bunch of sub modals from here.
*/
function taskModal(){
  document.body.querySelector('#modals').innerHTML = newTaskModal;

}
