
getData();

async function getData() {
  const response = await fetch('data/blog.json');
  const data = await response.json();

displayPosts(data);
}
/*async function getData() {
  try {
      const response = await fetch("data/blog.json");
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      writePosts(data);
  } catch (error) {
      console.error("Failed to fetch blog posts:", error);
  }
}
displayPosts(data);*/


function displayPosts(data) {
  data.forEach(post => {
    const div = document.createElement('div');
    div.classList.add('post');
    const template = ` 
    <img class="blogImg"src="${post.image}">
    <div class="blogText"
    <h3 class="blogTitle">${post.title}</h3>
    <p class="userBlog">${post.userName}</p>
    <p class="contBlog">${post.content}</p>
    <div class="divBlogTag">${post.Tags}</div> 
    </div>
    `
    div.innerHTML = template;
    document.querySelector('.blogContainer').appendChild(div);
   
  })
}