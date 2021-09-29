const inputItem = document.getElementById('input-item');
const btnAddItem = document.getElementById('btn-add-item');
const listContainer = document.querySelector('.list');
const database = new Map();
const switchDarkMode = document.getElementById('dark-mode');

btnAddItem.addEventListener('click', () => {
    const ITEM_KEY = inputItem.value.toUpperCase();
    const ITEM_VALUE = inputItem.value;

    // NOTE: Create element
    const listItem = document.createElement('li');
    const textItem = document.createElement('a');
    const addnilai = document.createElement('h1')
    const btnDelete = document.createElement('button');
    const counter = document.createElement('button');


   
    var i =1;
    counter.textContent = i;
  
    if (ITEM_VALUE === '') {
      alert("Item Name can't be blank");
      inputItem.focus();
      return;
    }

  
    if (database.has(ITEM_KEY)) {
      const duplicateConfirm = confirm('Item  "' + ITEM_VALUE + '" telah di tambahkan Klik ok untuk menambahkan lagi');

      if (duplicateConfirm) {
        
          const getCounter = document.getElementById(ITEM_KEY);
          i = Number(getCounter.textContent)
          getCounter.textContent = (i + 1);

      }
      inputItem.value = '';
      inputItem.focus();
      return;
  }
  counter.setAttribute("id", ITEM_KEY); 
  
    database.set(ITEM_KEY, ITEM_VALUE);
  
    listItem.classList.add('list-item'); // NOTE: Add Class

    textItem.textContent = ITEM_VALUE;
    btnDelete.textContent = 'Delete';
    
   


  listItem.append(textItem,btnDelete,counter);
  listContainer.appendChild(listItem);
  
 
    btnDelete.addEventListener('click', () => {
      const delConfirm = confirm("Klik ok untuk menlanjutkan penghapusan item")
      if (delConfirm) {
          const getCounter = document.getElementById(ITEM_KEY);

          if (getCounter.textContent === "1") {
              listContainer.removeChild(listItem);
          } else {
              i = Number(getCounter.textContent);
              getCounter.textContent = i - 1;
          }
      }
      inputItem.focus();
      return;
  });

  inputItem.value = '';
  inputItem.focus();

})
// // dark mode
switchDarkMode.addEventListener('change', function () {

  document.body.classList.toggle('darkMode');
  document.querySelector('.card').classList.toggle('darkMode');
  document.querySelector('.btn').classList.toggle('darkMode');
  switchDarkMode.classList.toggle('darkMode');
})
