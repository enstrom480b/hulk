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

const postthree=[
    {title:'post one',body:'this is post three'}
]
function createpost(post,callback)
{
setTimeout(()=>{
   posts.push(post) 
callback()  
},1000)
}


createpost(postthree,getposts)
