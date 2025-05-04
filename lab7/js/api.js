async function fetchData() {
    try {
        let [users, posts, comments] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
        ]);
        displayTAble(users, posts, comments);
    } catch (error) {
        document.body.innerText = "Error fetching API data";
    }
}

function displayTAble(users, posts, comments) {
    let table = document.querySelector('#displayTable');

    users.forEach(user => {
        
        let userPosts = posts.filter((post) => { 
            return post.userId === user.id 
        });

        let postList = userPosts.map((post) => {
            let postCommentsLen = comments.filter((comment) => {return comment.postId === post.id}).length;
            return `<li><strong>${post.title}</strong> (${postCommentsLen} comments)</li>`;
        });
        postList = postList.join('');

        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.company.name}</td>
            <td>${user.address.geo.lat}, ${user.address.geo.lng}</td>
            <td><ul>${postList}</ul></td>
        `;
        table.appendChild(tr);
    });
}

fetchData();