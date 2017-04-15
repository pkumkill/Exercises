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
}

//Better way to define functions in the prototype as we don't want to create duplicate functions on every instance creation.

//Prototype is a special object which every function has, where you define functions/properties that belong to the class.

function GalilieEditor (){
   DiagramEditor.call(this);
}
 
 dEditor = new DiagramEditor();
 dEditor.add(new Diagram(0,0,10,20);
 
 
 
  //Standard Inheritance/Not Recommended
  GalilieEditor.prototype = new DiagramEditor();
  
  GalilieEditor.prototype.draw = function() {
    //TODO : Draw to DOM
  }
  
  //Recommended - Parasitic Inheritance (when we wnat to inherit a class)
  GalilieEditor.prototype = Object.create(DiagramEditor.prototype);
  
  GalilieEditor.prototype.draw = function() {
    //TODO : Draw to DOM
  }
  
  
  //mixins -  when we want to extends behaviors - TODO Start after functional programming.
  
  
  
  
  
