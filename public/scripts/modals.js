/*lol here for github i add all the modals to the html
dynamiccall with innerHTML. so i can have more lines of javascript.
*/
 var newTaskModal =
 '<article class="modal general"> \
 <button class="who"> Who? </button> \
 <button class="what"> What? </button> \
 <button class="where"> Where? </button> \
 <button class="when"> When? </button> \
 <br /> <br /> <br /> \
 <table> \
 <tr> \
  <td><button class="cancel"> |x| Cancel |X| </button></td> \
  <td><button class="submit"> |✓| Submit |✓| </button> </td>\
  </tr> \
  </table> \
 </article>';


/* These are all the different things that can be done,
when used, the cateogry dropbox is filled based on the data.
they dont have quantities or locaitons, all they are
is products.
name :: cateogry :: img
*/
var whatData = [{
    name: "meow",
    category: "meowzers",
    img: ""
  },
  {
    name: "purr",
    category: "meowzers",
    img: ""
  },
  {
    name: "woof",
    category: "woofers",
    img: ""
  },
  {
    name: "mlem",
    category: "woofers",
    img: ""
  }
];

var allCategories={};



var whoModal = ''; //list of names also write inss
var whatModal = ''; // picutres of material, quantity and type.
var whereModal = ''; // maybe image map? suggestions.
var whenModal = ''; // this is basically just a date.



/* === add the global Event listeners
*/
window.addEventListener("load",function(){
  let plus = document.body.querySelector('#addTask');
  plus.addEventListener('click',taskModal); //opens the modal by adding it to the page.


//creates a dictionary of all the keys.
  for(var keys=0;keys<whatData.length;keys++){
    allCategories[whatData[keys].category] = 1;
  }

  fillModals();

});
/*=== end event listeners
*/



/*name: handles click on the gernal modals
input: click locaiton
output: decides which modal function to fcall
*/
function handleGeneralModal(event){
    var name = event.target.classList[0];
    console.log('which one was clicked?', name);
    // most of them bring up a speicif modal so i throw them at
    //same function
    switch(name){
      case "who":
      case "what":
      case "when":
      case "where":
            specificModal(name);break;
      case "sumbit":
      case "cancel":
      case "sub":
            verifyAllInfo(event);break; // which submit button was clicked?
      default: break;
    }
    return;
}


/* decides which modal to build
err i mean unhide. this handes each moda click in the modal
*/
function specificModal(name){
  let string = '#' + name;
  var modal = document.body.querySelector(string);
  console.log("you have selected the ", name," modal",modal);

  modal.classList.remove('hidden');
}
function verifyAllInfo(event){
  console.log(event.target.parentNode.id);

}

/*All these funcitns will have to verify each modal. and they will have'
to check different things each time! ther is submit and there
is the cancel so those will ahve to be fuunctions too

inputs: none,
outputs: json of the info they inputted*/

function verifyWhat(){
  var whatinfo = [];
  var valid =true;

  var inputs = document.body.querySelector('article.what').querySelectorAll('input');

  for(var i=0;i<inputs.length;i++){
    whatinfo.push(inputs[i].value);
  }

  if(valid){
    for(var i=0;i<inputs.length;i++){
      inputs[i].value=null;
    }
    return whatinfo;
  }
  else{
    return false;
  }


}

document.querySelector('#stuff-category').addEventListener('click',function(event){

  var category = document.querySelector('#stuff-category').value;
  var results = document.querySelector('#stuff-name');
  console.log('categories that are : ', category);

  while (results.firstChild.nextSibling) {
    results.removeChild(results.lastChild);
  }

  let slave =0;
  for(let i=0; i<whatData.length;i++){
    if(whatData[i].category == category){
      slave=document.createElement('option');
      slave.value=whatData[i].name;
      slave.textContent=whatData[i].name;
      results.appendChild(slave);
    }
  }


});



// /end what helper funcitons
function verifyWho(){

}
function verifyWhere(){

}
function verifyWhen(){

}

/*FILLER
All these categories... so many elements to be added..
I wonder how much this might cost
DESC: This appents input options to the input lists.
INPUTS: variablees i nthe dictionary
OUTPUTS: new html elements n still.
*/
function fillModals(){

  let what = document.body.querySelector("#what");
  var whatCategs = what.querySelector('select');
  var categs = Object.keys(allCategories);

  var slave;
  for(var keys=0;keys<categs.length;keys++){
    slave=document.createElement('option');
    slave.value= categs[keys];
    slave.textContent= categs[keys];
    whatCategs.appendChild(slave);
  }

}


/*Add a new task!
This will open up the modal to the
new classes Who What Where When?
a bunch of sub modals from here.
*/
function taskModal(){
  let section = document.body.querySelector('#modals');
  section.innerHTML += newTaskModal;
  section.addEventListener('click',handleGeneralModal);

}
