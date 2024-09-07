const apiUrl = "https://localhost:3000/users"

fetch(apiUrl).then(response => {
    if (response.ok) {
        throw new Error('Network response not OK');
    }

    return response.json();
}).then(data => {
    console.log('User Data:', data);
})
.catch(error => {
    console.error('Error: ',error);
})