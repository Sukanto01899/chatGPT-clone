import axios from "axios";

export const handleChatApi = async (input: string) => {
  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
        import.meta.env.VITE_CHATGPT_SECRET_KEY
      }`,
      {
        contents: [{ parts: [{ text: input }] }],
      }
    );
    // console.log(messages);
    console.log(res);
    return res.data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.log(err);
  }
};
