const objectiveSubmissionForm=document.getElementById("objective-submission-form");
//get a refernce to ul
const objectiveListElement=document.getElementById("recommendations");

//get actual input
const recommInput=document.getElementById("recomm");

//store information
const objectiveList=[];


//input received from form and data 
function createObjective(text){
    
    return{
        
        value:text,
    }
}
// view portion on website
function createObjectiveElement(objective){
    
    const objectiveElement=document.createElement("li");
    
    objectiveElement.innerText=objective.value;
    return objectiveElement;
    
}

function renderObjectiveList(){
    
    //delete elements in the unordered list
    objectiveListElement.innerHTML="";
    
    let objective;
    
    for(objective of objectiveList){
        
        //create actual objective element in the html element
        const objectiveElement=createObjectiveElement(objective);
        objectiveListElement.appendChild(objectiveElement);
        
    
	}
    
}

//add event Listener


objectiveSubmissionForm.addEventListener("submit", function (e){
    
    e.preventDefault();
    
    const objectiveText=recommInput.value;
    const objective=createObjective(objectiveText);
    objectiveList.push(objective);
    renderObjectiveList();
    
});

//creating a if else loop to get the hours and print out the message in the text area
const hour = new Date().getHours(); 
let greeting;
// The text area will display based on the hours less than 18 hr as good day or good evening
if (hour < 18) {
  greeting = "Good day type your message here";
} else {
  greeting = "Good evening type your message here";
}

document.getElementById("subject").innerHTML = greeting;