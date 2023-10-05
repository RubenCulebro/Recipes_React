import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient, ObjectId } from "mongodb";
import multer from "multer";

const __fileName = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__fileName);

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "./build")));
app.use(express.static(path.join(__dirname, "images")));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'images/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); 
  }
});

const upload = multer({ storage: storage });

app.get(/^(?!\/).+/, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/recipesData", async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("recipes");
  const recipeData = await db.collection("recipes").find({}).toArray();
  //console.log(recipeData);
  res.json(recipeData);
});

app.post("/api/addRecipe", upload.single("image"), async (req, res) => {
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
  
    const db = client.db("recipes");
    const recipeData = await db.collection("recipes").insertOne({
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      image: req.file.filename,
      directions: req.body.directions,
    });
    //console.log(recipeData);
    res.redirect("/");
  });

app.post("/api/deleteRecipe", async (req, res) => {
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
    const db = client.db("recipes");
    try {
      const deleteOperation = await db.collection("recipes").deleteOne({ _id: new ObjectId(req.body._id) });
      console.log(deleteOperation);
  
      if (deleteOperation.deletedCount === 1) {
        res.json({ success: true, message: "Recipe deleted successfully." });
      } else {
        res.json({ success: false, message: "Error deleting recipe." });
      }
    } catch (error) {
      console.error("Error during delete operation:", error);
      res.json({ success: false, message: "Error deleting recipe." });
    }
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
