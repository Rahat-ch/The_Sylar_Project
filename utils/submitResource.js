async function submitResource(data = {}) {
    console.log({ data })
    const response = await fetch('/api/createResources', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response.json()
}

export default submitResource

// postData('https://example.com/answer', { answer: 42 }).then((data) => {
//     (data) // JSON data parsed by `data.json()` call
// })
