async function resumenConMistralYGemini() {
    const inputText = document.getElementById('inputText').value;
    const responseContainer = document.getElementById('responseContainer');
    const responseContainer1 = document.getElementById('responseContainer1');
    const loaderGemini = document.getElementById('loaderGemini');
    const loaderMistral = document.getElementById('loaderMistral');

    const mistralApiKey = "yNGMUswB1u753flbYhdzNU8vdEllinMB";
    const geminiApiKey = "AIzaSyB8R7BiixbNeBJgrnoe98k6-IvIGoEczbM";

    if (!inputText.trim()) {
        responseContainer.textContent = "Por favor, ingresa algún texto.";
        responseContainer1.textContent = "Por favor, ingresa algún texto.";
        return;
    }

    loaderGemini.style.display = 'block';
    loaderMistral.style.display = 'block';
    responseContainer.textContent = "";
    responseContainer1.textContent = "";

    try {
        // Enviar a ambas IAs en paralelo
        const [mistralRes, geminiRes] = await Promise.all([
            fetch("https://api.mistral.ai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${mistralApiKey}`
                },
                body: JSON.stringify({
                    model: "mistral-medium",
                    messages: [
                        { role: "user", content: `Resume el siguiente texto de forma clara y breve:\n\n${inputText}` }
                    ]
                })
            }),
            fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Resume el siguiente texto de forma clara y breve:\n\n${inputText}`
                                }
                            ]
                        }
                    ]
                })
            })
        ]);

























} 