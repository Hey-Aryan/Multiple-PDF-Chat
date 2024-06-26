// OpenAI URL and Headers
const openAiHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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'
}


async function createEmbedding(textToEmbed) {
    let response = await fetch(`https://api.openai.com/v1/embeddings`,{
    method: 'POST',
    headers: openAiHeaders,
    body: JSON.stringify({
        'model': 'text-embedding-ada-002',
        'input': textToEmbed
        }),
    });
    if (response.ok){
        response.json().then(data => {
            console.log (data);
            return data;
        }) ;
    }
}

createEmbedding("Hello World")