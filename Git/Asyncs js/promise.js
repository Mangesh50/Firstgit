console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const PromiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const getButter = new Promise((resolve, reject) => resolve('butter'));

    const getColdDrinks = new Promise((resolve, reject) => resolve('colddrinks'));

    let ticket = await PromiseWifeBringingTicks;

    let [popcorn, butter, colddrinks] = await Promise.all([getPopcorn,getButter,getColdDrinks])

    console.log('${popcorn}, ${butter}, ${colddrinks}')
    return ticket;
}

preMovie().then((m) => console.log('person3: shows ${m}'));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

const posts = [];
let lastActivityTime = null;

function delay(ms)
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createPost(title) {
    await delay();
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const post = { title: title };
            posts.push(post);
            resolve(post);
        }, 1000);
        });
}

async function updateLastUserActivityTime() {
    await delay();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}
async function deleteLastPost() {
    await delay();
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

// const posts = async () => {
//     const lastActivityTimes = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('post'), 1000);
//     });

//     const createPost = new Promise((resolve, reject) => resolve('post'));

//     const updateLastUserActivityTime = new Promise((resolve, reject) => resolve('lastActivityTime'));

//     const deleteLastPost = new Promise((resolve, reject) => resolve('deletedPost'));

//     let posted = await lastActivityTimes;

//     let [post, lastActivityTime, deletedPost] = await Promise.all([createPost,updateLastUserActivityTime,deleteLastPost])

//     console.log('${post}, ${lastActivityTime}, ${deletedPost}')
//     return lastActivityTimes;
// }

// posts().then((m) => console.log('person: shows ${m}'));
