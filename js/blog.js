
getData();

async function getData() {
  try {
      const response = await fetch("data/blog.json");
      if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      displayPosts(data);
} catch(error){
  console.error("Failed to fetch blog posts:", error);
}
}




function displayPosts(data) {
  data.forEach(post => {
    const div = document.createElement('div');
    div.classList.add('post');
    const template = ` 
    <img class="blogImg"src="${post.image}">
    
    <div class="blogText">
    <br>
    <h3 class="titleBlog">${post.title}</h3>
    <br>
    <p class="userBlog">${post.userName}</p>
    <br>
    <p class="contBlog">${post.content}</p>
    <br>
    <div class="divBlogTag">${post.Tags}</div> 
    </div>
    `
    div.innerHTML = template;
    document.querySelector('.blogContainer').appendChild(div);
   
  })
}