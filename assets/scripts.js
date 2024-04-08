const topics = ["HTML", "CSS", "Git", "JavaScript"];

//print function prints to console the contents of the topics array
function print() {
  topics.map((y) => console.log(y));
}

//calls print() function
print();

//function to print out what to study
/* the "please try again" doesn't make any sense in the user story
   so it shouldn't be coded
*/
function studyNext() {
  console.log(
    `Which topic should we study first?
  Let's study ${topics[Math.floor(Math.random() * topics.length)]}!`
  );
}

//call studyNext with random value to output what
//to study next
studyNext();
