import  { db } from './dbConnect.js'

// CREATE Add new Tv
export function addNewTv (req, res) {
  const newTv = req.body;
  db.collection('tvShows')
    .add(newTv)
    .then(doc => res.status(201).send(`New Tv Added: ${doc.id}`))
    .catch(err => res.status(500).send(err));
}

// GET get all TV shows
export async function getAllTv(req, res) {
  const collection = await db.collection('tvShows')
    .get()
    .catch(err => res.status(500).send(err))
  
  const tvShowList = collection.doc.map(show => ({...show.data(), id: show.id}))
}

