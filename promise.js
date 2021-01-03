const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post one',body:'this is post two'}
]
function getposts(){
    setTimeout(() => {
        let output=''
        posts.forEach((post,index)=>{
            output+=`<li>${post.title},${post.body}</li>`
            console.log(post)
        })
           document.body.innerHTML=output 
    }, 2000);

}

const postthree={title:'post one',body:'this is post three'}

function createpost(post,callback)
{
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.push(post)
  resolve()
 }, 2000);
    })  
      
}

createpost(postthree,getposts).then(getposts)
