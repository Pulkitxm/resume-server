import axios from "axios";
import express from "express";

const app = express();
app.use(express.json());

app.get("/", async (_, res) => {
  try {
    const axiosRes = await axios.get("https://pulkitxm.com/api/links");
    const links = axiosRes.data;
    if (links?.resume) {
      let resumePage = links.resume;
      console.log(resumePage);
      
      return res.redirect(resumePage);
    }
  } catch (error) {
    return res.redirect("https://pulkitxm.com");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Reverse Proxy Running on port ${PORT}`);
});
