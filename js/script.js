//Created a Function to ADD an item when there's a CLICK on 'ADD' Button
function newItem(){
  //Defined list as li
   let li = $('<li></li>');
   //Defined 'inputValue' by the value function of #input id
   let inputValue = $('input').val();
   //Appended 'inputValue' to the list of items 'li'
   li.append(inputValue);

   //Adding a condition: when the inputValue is empty
   if (inputValue === '') {
     //Alert pop-up will be displayed
     alert("Please ad a list item");
   } else {
     //Otherwise, the 'li' item will be added to the #list id
     $('#list').append(li);
   }

//Created a Function to STRIKE items from the list.
function crossOut() {
  li.toggleClass('strike');
}
  //Created Event Listener: when item is double-clicked, it will be striked
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //Assigned the variable 'crossOutButton' to the X Button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  //Appended the X Button to the crossOutButton variable
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//Created a Function to DELETE items from the list
function deleteListItem() {
  li.addClass('delete');
}

  //Added an EventListener for deleting items when X Button is clicked
  crossOutButton.on('click', deleteListItem);

  //Made items possible to reorder
  $('#list').sortable();

}









// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








  /*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/
