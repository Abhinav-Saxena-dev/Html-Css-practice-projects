const posts = [
    { title : "1" , body : "This is one"},
    { title : "2" , body : "This is two"}
];
const getPost = () => {
setTimeout(
    () => {
        let output = '';
        posts.forEach(
            (post) => {
                output += `<li>${post.title}</li>`
            }
        );
        document.body.innerHTML = output;
    } 
, 1000);
}
const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{    //setTimeout(function, milliseconds, param1, param2, ...)
            posts.push(post);
            const error = false;
            if(error){
                resolve();
            }
            else{
                reject("ERROR ERROR ERROR MEW MOW MEW MOW MEW MOW");
            }
        },2000);
    });
}
/* createPost({title : "3", body : "This is three"}).then(getPost).catch(err => console.log(err)); */

const promise1 = Promise.resolve("hello");
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 2000, "Goodbye");  //setTimeout(function, milliseconds, param1, param2, ...)
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); // we need to use 2 .then when using fetch. First to make it json then the next to perform actions.
// fetch returns a promise.

Promise.all([promise1,promise2,promise3,promise4]).then(value => console.log(value));  // takes time of longest setTimeout, takes in arrays of promise.
// the call back function inside the .then will also give an arguement which is the parameter value here.

//better way to use fetch

/*  async function fetchuser(){
    const res = await fetch(-------);
    const data = await res.json();
    console.log(data);
} */