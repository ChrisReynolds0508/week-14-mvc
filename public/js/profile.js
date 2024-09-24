const newFormHandler = async (event) => {
    event.preventDefault();
    
    const title = document.querySelector('#blog-name').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    
    if (title && content) {
        const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
            'Content-Type': 'application/json',
        },
        });
    
        if (response.ok) {
        document.location.reload();
        } else {
        alert('Failed to create blog');
        }
    }
    };  

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        });
    
        if (response.ok) {
        document.location.reload();
        } else {
        alert('Failed to delete blog');
        }
    }
    }

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
// In the code snippet above, we're defining two functions: one to handle the creation of a new blog and another to handle the deletion of a blog. We're also adding event listeners to the new blog form and the blog list. When the form is submitted, the newFormHandler function is called. When the delete button is clicked, the delButtonHandler function is called. Finally, we're exporting the router object.