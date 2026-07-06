// api/curate.js

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({
                error: "Prompt is required."
            });
        }

        const systemPrompt = `
You are Gaana's AI Vibe Curator.

The user describes a mood.

Generate exactly FIVE fictional independent Indian songs.

Return ONLY JSON.

Example:

{
  "vibe_summary":"Rainy midnight drive",
  "songs":[
    {
      "track":"...",
      "artist":"...",
      "region":"...",
      "vibe":"..."
    }
  ]
}
`;

        const response = await fetch(
            "https://api.anthropic.com/v1/messages",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.ANTHROPIC_API_KEY,
                    "anthropic-version": "2023-06-01"
                },

                body: JSON.stringify({

                    model: "claude-3-5-sonnet-20241022",

                    max_tokens: 1000,

                    system: systemPrompt,

                    messages: [
                        {
                            role: "user",
                            content: prompt
                        }
                    ]

                })

            }
        );

        if (!response.ok) {

            const err = await response.text();

            return res.status(response.status).json({
                error: err
            });

        }

        const data = await response.json();

        const text =
            data.content
                ?.map(c => c.text || "")
                .join("")
                .trim();

        const clean =
            text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

        const playlist = JSON.parse(clean);

        return res.status(200).json(playlist);

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            error: "Internal Server Error"

        });

    }

}
