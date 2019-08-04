//Storage Controller
const StorageCtrl = (function () {

  //Public Methods
  return {
    storeItem: function (item) {
      let items = null;
      // Check if any items in localstorage
      if (localStorage.getItem('items') === null) {
        items = [];
        //Push new item
        items.push(item);
        //Set localstorage
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        //Get what is already in localstorage
        items = JSON.parse(localStorage.getItem('items'));
        //Push new item
        items.push(item);
        //Re set localstorage
        localStorage.setItem('items', JSON.stringify(items));
      }
    },

    getItemsFromStorage() {
      let items = null;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },

    updateItemStorage(updateditem) {
      let items = JSON.parse(localStorage.getItem('items'));
      items.forEach(function (item, index) {
        if (updateditem.id === item.id) {
          items.splice(index, 1, updateditem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },

    deleteItemFromStorage(id) {
      let items = JSON.parse(localStorage.getItem('items'));
      items.forEach(function (item, index) {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },

    clearItemsFromStorage: function () {
      localStorage.removeItem('items');
    }
  }
})();


//Item Controller
const ItemCtrl = (function () {
  //Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  //Data Structure / State
  const data = {
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  //Public methods
  return {
    getItems() {
      return data.items;
    },

    setCurrentItem(item) {
      data.currentItem = item;
    },

    getTotalCalories() {
      let total = 0;
      // Loop through items and add cals
      data.items.forEach(function (item) {
        total += item.calories;
      });
      //Set total cal in data structure
      data.totalCalories = total;
      // Return 
      return data.totalCalories;
    },

    getCurrentItem() {
      return data.currentItem;
    },

    getItemById(id) {
      let found = null;
      //Loop through items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },

    addItem(name, calories) {
      let ID = null;
      //Create ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      //Calories to number
      calories = parseInt(calories);
      //Create new item
      const newItem = new Item(ID, name, calories);
      //Add to items array
      data.items.push(newItem);
      return newItem;
    },

    updateItem(name, calories) {
      // Calories to number
      calories = parseInt(calories);
      let found = null;
      data.items.forEach(function (item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },

    deleteItem(id) {
      // Get ids
      const ids = data.items.map(function (item) {
        return item.id;
      });
      //Get index
      const index = ids.indexOf(id);
      //Remove item
      data.items.splice(index, 1);
    },

    clearAllItems() {
      data.items = [];
    },

    logData() {
      return data;
    }
  }

})();


//UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }

  //Public methods
  return {
    getSelectors() {
      return UISelectors;
    },

    getItemInput() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },

    addListItem(item) {
      //Show the list 
      document.querySelector(UISelectors.itemList).style.display = 'block';
      //Create li element
      const li = document.createElement('li');
      //Add class
      li.className = 'collection-item';
      //Add ID
      li.id = `item-${item.id}`;
      //Add HTML
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      //Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },

    hideList() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showTotalCalories(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },

    clearInput() {
      document.querySelector(UISelectors.itemNameInput).value = ''
      document.querySelector(UISelectors.itemCaloriesInput).value = ''
    },

    addItemToForm() {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },

    showEditState() {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline-block';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline-block';
      document.querySelector(UISelectors.backBtn).style.display = 'inline-block';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },

    updateListItem(item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      //Turn node list into array
      listItems = Array.from(listItems);
      listItems.forEach(function (listItem) {
        const itemID = listItem.getAttribute('id');
        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          `;
        }
      });
    },

    deleteListItem(id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },

    removeItems() {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node List into array
      listItems = Array.from(listItems);
      listItems.forEach((item) => {
        item.remove();
      });
    },

    clearEditState() {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline-block';
    },

    populateItemLists(items) {
      let html = '';
      items.forEach((item) => {
        html += `
          <li id="item-${item.id}" class="collection-item">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>
        `;
      });
      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  }
})();


//App Controller
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
  //Add Item submit
  const itemAddSubmit = function (e) {
    //Get form input from UI Controller
    const input = UICtrl.getItemInput();
    //Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      // Add Item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add item to UI list
      UICtrl.addListItem(newItem);
      //Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);
      //Store in localStorage
      StorageCtrl.storeItem(newItem);
      // Clear fields
      UICtrl.clearInput();
    }
    e.preventDefault();
  }

  // Update item click
  const itemEditClick = (e) => {
    if (e.target.classList.contains('edit-item')) {
      //Get list item id (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id;
      // Break into an array
      const listIdArr = listId.split('-');
      // Get actual id
      const id = parseInt(listIdArr[1]);
      //Get item
      const itemToEdit = ItemCtrl.getItemById(id);
      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);
      //Add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  }


  //Update item submit
  const itemUpdateSubmit = (e) => {
    //Get item input
    const input = UICtrl.getItemInput();
    //Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    //Update UI
    UICtrl.updateListItem(updatedItem);
    //Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    //Update localstorage
    StorageCtrl.updateItemStorage(updatedItem);
    UICtrl.clearEditState();
    e.preventDefault();
  }

  //Delete button event
  const itemDeleteSubmit = function (e) {
    //Get current item
    const currentItem = ItemCtrl.getCurrentItem();
    //Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);
    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);
    //Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    //Delete from localstorage
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditState();
    e.preventDefault()
  }

  //Clear items event
  const clearAllItemsClick = function () {
    //Delete all items from data structure
    ItemCtrl.clearAllItems();
    //Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);
    //Remove from UI
    UICtrl.removeItems();
    //Clear from localStorage
    StorageCtrl.clearItemsFromStorage();
    //Hide Ul
    UICtrl.hideList();
  }

  // Load event listeneres
  const loadEventListeners = function () {
    //Get UI Selectors
    const UISelectors = UICtrl.getSelectors();
    //Disable submit on enter
    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    })
    //Add Item Event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);
    //Edit icon click
    document
      .querySelector(UISelectors.itemList)
      .addEventListener('click', itemEditClick);
    //Update item event 
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit);
    //Delete item event
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit);
    //Clear items event
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener('click', clearAllItemsClick);
    //Back btn event
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener('click', UICtrl.clearEditState);
  }

  //Public methods
  return {
    init: function () {
      //Clear edit state / set initial set
      UICtrl.clearEditState();
      //Fetch items from datastructure
      const items = ItemCtrl.getItems();
      //Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        //Populate lists with items
        UICtrl.populateItemLists(items);
      }
      //Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);
      //Load  event listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, StorageCtrl, UICtrl);

//Initializin App
App.init();