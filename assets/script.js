var topic = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topic[Math.floor(Math.random() * topic.length)];

function listTopics() {
    for (var x = 0; x < topic.length; x++) {
    console.log(topic[x]);
   }
}

/* function selectTopic() {
    if (topic[0] === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topic[0] === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topic[0] === 'Git') {
        console.log("Let's study Git!");
    } else if (topic[0] === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
} */

function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
}  
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();

