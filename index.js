





















































 const mistralData = await mistralRes.json();
        const geminiData = await geminiRes.json();

        const resumenMistral = mistralData.choices?.[0]?.message?.content?.trim() || "❌ Mistral no devolvió resumen.";
        const resumenGemini = geminiData.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "❌ Gemini no devolvió resumen.";

        loaderGemini.style.display = 'none';
        loaderMistral.style.display = 'none';

        responseContainer.innerHTML = `
        <strong>🌟 Resumen con Gemini:</strong><br>${resumenGemini}<br><br>
        `;

        responseContainer1.innerHTML = `
        <strong>🧠 Resumen con Mistral:</strong><br>${resumenMistral}<br><br>
        `;

    } catch (error) {
        loaderGemini.style.display = 'none';
        loaderMistral.style.display = 'none';
        console.error(error);
        responseContainer.textContent = "❌ Error al conectar con las APIs.";
        responseContainer1.textContent = "❌ Error al conectar con las APIs.";
    }