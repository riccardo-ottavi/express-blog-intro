const express = require("express")
const app = express()
const port = 3000

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("<h1>Server del mio blog<h1>")
})

app.get("/bacheca", (req, res) => {
    const posts = [
  {
    titolo: "Come il design influisce sulla sostenibilità",
    contenuto: "Il design sostenibile non è solo una questione estetica: implica scelte consapevoli sui materiali, sul ciclo di vita del prodotto e sull’impatto ambientale. Scopri come progettare con una visione etica e innovativa.",
    immagine: "http://localhost:3000/imgs/blog-img1.png",
    tags: ["sostenibilità", "design", "ambiente"]
  },
  {
    titolo: "5 tecniche per migliorare la produttività con l’intelligenza artificiale",
    contenuto: "Dall’automazione delle email alla generazione di report, l’IA può semplificare il lavoro quotidiano. In questo articolo esploriamo strumenti pratici e strategie per integrarla nel tuo flusso di lavoro.",
    immagine: "http://localhost:3000/imgs/blog-img2.webp",
    tags: ["intelligenza artificiale", "tecnologia", "produttività"]
  },
  {
    titolo: "Eventi green: come organizzare un festival sostenibile",
    contenuto: "Ridurre i rifiuti, gestire l’energia in modo efficiente e coinvolgere il pubblico in azioni concrete: ecco le linee guida per un evento davvero sostenibile, dalla pianificazione alla rendicontazione.",
    immagine: "http://localhost:3000/imgs/blog-img1.webp",
    tags: ["eventi", "sostenibilità", "management"]
  },
  {
    titolo: "Dal suono all’esperienza: introduzione al sound design",
    contenuto: "Il sound design trasforma un prodotto o un videogioco in un’esperienza immersiva. Vediamo come il suono comunica emozioni e identità, e quali strumenti utilizzare per iniziare.",
    immagine: "http://localhost:3000/imgs/blog-img4.jpg",
    tags: ["musica", "sound design", "creatività"]
  },
  {
    titolo: "Filosofia e scienza: un dialogo ancora necessario",
    contenuto: "La filosofia della scienza offre strumenti per comprendere meglio i limiti e le potenzialità del sapere scientifico. Riscoprire questo dialogo significa affrontare le sfide etiche della tecnologia contemporanea.",
    immagine: "http://localhost:3000/imgs/blog-img5.jpg",
    tags: ["filosofia", "scienza", "etica"]
  }
];
res.json(posts)
})

app.listen(port, () => {
    console.log("Example app listening on port", port)
})