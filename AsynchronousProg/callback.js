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
    const createPost = (post, cb) => {
        setTimeout(()=>{
            posts.push(post);
            cb();
        },2000);
    }
    createPost({title : "3", body : "This is three"}, getPost);