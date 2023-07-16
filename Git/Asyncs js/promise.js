const posts = [];
let lastActivityTime = null;

function createPost(title) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const post = { title: title };
            posts.push(post);
            resolve(post);
        }, 1000);
        });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}
function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length>0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

createPost("Post 1")
.then(() => updateLastUserActivityTime())
.then(() => {
    if(lastActivityTime) {
        console.log("Posts:", posts);
        console.log("Last Activity Time", lastActivityTime);
    }
    return createPost("Post 2");
})
.then(() => updateLastUserActivityTime())
.then(() => deleteLastPost())
.then(() => {
    console.log("New Posts:", posts);
})
.catch((error) => console.log(error));