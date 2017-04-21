function Diagram(x1, x2, x3 , x4){
this.x1 = x1;
this.x2 = x2;
this.x3 = x3;
this.x4 = x4;
}
function DiagramEditor(){
  this.diagrams = [];
}

DiagramEditor.prototype.add = function(diagram){
	  if(diagram instanceof Diagram){	
		this.diagrams.push(diagram);
	  }else{
	    throw new Error("Idiot add a Diagram!");
	  }
};

DiagramEditor.prototype.remove = function(diagram){
	var index;
	if (diagram instanceof Diagram && this.diagrams.length > 0){
		index = this.diagrams.indexOf(diagram);
		if(index != -1){
			this.diagrams.splice(index,1);
		}
	}
};

DiagramEditor.prototype.draw = function(a){
	// Draw to DOM.
};

//Better way to define functions in the prototype as we don't want to create duplicate functions on every instance creation.

//Prototype is a special object which every function has, where you define functions/properties that belong to the class.

 function GalilieEditor (){
  DiagramEditor.call(this);
 }

 dEditor = new DiagramEditor();
 dEditor.add(new Diagram(0,0,10,20);
 
  //Standard Inheritance/Not Recommended
  GalilieEditor.prototype = new DiagramEditor();

  //Recommended - Parasitic Inheritance (when we wnat to inherit a class)
  GalilieEditor.prototype = Object.create(DiagramEditor.prototype);
  
  //Overriding a method
  GalilieEditor.prototype.draw = function(a,b) {
    DiagramEditor.prototype.draw(this, arguments); // Calls super's draw method if you want to
    //TODO : Draw to DOM Galilie Style // Coninue drawing here

    //else if you dom't want that write your draw logic
  };

  //mixins -  when we want to extends behaviors - TODO Start after functional programming.
  
  // Why is Overloading not allowed based on return types? - As ambiguity exists for the compiler to determine which one to invoke when the return type is not specified during invocation.
// 
Supermarket Implementation :-
Has Stores as member - Ex:- Bakery, Veggie Store both extend Store class.
Location as member

Store has:-
size,
cost of operation,
floor
ItemCatalogs

ItemCatalog - 
has Items 
Category - Class(name)

Items - 
price
name 
description
Categories 


//---------------------------------------------------------------------------------------------------------------------------------------------------------------


function SuperMarket ( location) {
   this.location = location;
   this.stores = [];
}

function Store(size, costOfProdcution,floor){
  this.size = size;
  this.costOfProdcution = costOfProdcution;
  this.floor = floor;
  this.itemCatalogs = [];
}
SuperMarket.prototype.addStore = function(store){

};
SuperMarket.prototype.removeStore = function(store){

};

function ItemCatalogs (category){
  this.category = category;
  this.items = [];
}

Store.prototype.addCatalog = function(itemCatalog){
 if(itemCatalog instanceof ItemCatalogs){
   this.itemCatalogs.push(itemCatalog);
	  }else{
	    throw new Error("Add an Item!");
	  }
 };
 
 Store.prototype.removeCatalog = function(){
    var index;
	  if (itemCatalog instanceof ItemCatalogs && this.itemCatalogs.length > 0){
		index = this.itemCatalogs.indexOf(itemCatalog);
		if(index != -1){
			this.itemCatalogs.splice(index,1);
 };

 ItemCatalogs.prototype.addItem = function(item){
    //
 };

 ItemCatalogs.prototype.removeItem = function() {
   //
 };

 function Bakery (){
   Store.call(this);
 }

 function Veggie () {
  Store.call(this);
 }

 Bakery.prototype = Object.create(Store.prototype);
 Veggie.prototype = Object.create(Store.prototype);
  

 objStore = new Store(); 
 objstore.add(new ItemCatalogs(perfume));

 objMarket = new SuperMarket();
 objMarket.add(new Store(500,120000,2));