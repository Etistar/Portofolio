/**
 * Midterm API Project - COMP229
 * Implement the six equipment API endpoints described in README.md.
 * Use the array index as the ID: index 0 is the first equipment item.
 * Add exactly two personalized items to the five supplied below.
 */
import express from 'express';

const app = express();
app.use(express.json());

let equipment = [
  { name: 'USB Microphone', category: 'audio', brand: 'AudioLab', year: 2021, quantity: 5 },
  { name: 'LED Panel', category: 'lighting', brand: 'BrightWorks', year: 2022, quantity: 4 },
  { name: 'Network Switch', category: 'networking', brand: 'NetCore', year: 2020, quantity: 3 },
  { name: 'Cable Tester', category: 'tools', brand: 'TestPro', year: 2019, quantity: 6 },
  { name: 'Studio Headphones', category: 'audio', brand: 'SoundCraft', year: 2023, quantity: 8 },
  // Ajouts personnels. Numero 301559049, dernier chiffre 9 : deux equipements portables.
  { name: 'Portable Bluetooth Speaker', category: 'audio', brand: 'JBL', year: 2023, quantity: 3 },
  { name: 'Portable Projector', category: 'video', brand: 'Epson', year: 2021, quantity: 2 }
];

// Verifie que le corps JSON a les 5 champs attendus.
function readEquipment(body) {
  if (!body || typeof body !== 'object') return null;

  const { name, category, brand, year, quantity } = body;
  const validText = value => typeof value === 'string' && value.trim() !== '';
  const validYear = typeof year === 'number' && Number.isInteger(year);
  const validQuantity = typeof quantity === 'number' && Number.isInteger(quantity) && quantity >= 0;

  if (!validText(name) || !validText(category) || !validText(brand) || !validYear || !validQuantity) {
    return null;
  }

  return {
    name: name.trim(),
    category: category.trim(),
    brand: brand.trim(),
    year,
    quantity
  };
}

// L'id est la position dans le tableau. 0 = premier element.
function readIndex(id) {
  const index = Number(id);

  if (!Number.isInteger(index) || index < 0) {
    return { status: 400, message: 'ID must be a whole number starting at 0.' };
  }

  if (index >= equipment.length) {
    return { status: 404, message: 'Equipment not found.' };
  }

  return { index };
}

// 1. Liste complete.
app.get('/api/equipment', (req, res) => {
  res.status(200).json(equipment);
});

// 2. Filtre par categorie. Doit rester avant /:id.
app.get('/api/equipment/filter', (req, res) => {
  const { category } = req.query;

  if (typeof category !== 'string' || category.trim() === '') {
    return res.status(400).json({ message: 'Query category is required. Example: ?category=audio' });
  }

  const matches = equipment.filter(item => item.category === category);
  res.status(200).json(matches);
});

// 3. Un seul equipement, selon son index.
app.get('/api/equipment/:id', (req, res) => {
  const found = readIndex(req.params.id);

  if (found.message) {
    return res.status(found.status).json({ message: found.message });
  }

  res.status(200).json(equipment[found.index]);
});

// 4. Ajoute un equipement a la fin du tableau.
app.post('/api/equipment', (req, res) => {
  const item = readEquipment(req.body);

  if (!item) {
    return res.status(400).json({
      message: 'Body must include name, category, brand (text), year and quantity (whole numbers).'
    });
  }

  equipment.push(item);
  res.status(201).json(item);
});

// 5. Remplace l'equipement a cet index.
app.put('/api/equipment/:id', (req, res) => {
  const found = readIndex(req.params.id);

  if (found.message) {
    return res.status(found.status).json({ message: found.message });
  }

  const item = readEquipment(req.body);

  if (!item) {
    return res.status(400).json({
      message: 'Body must include name, category, brand (text), year and quantity (whole numbers).'
    });
  }

  equipment[found.index] = item;
  res.status(200).json(item);
});

// 6. Supprime l'equipement. Les index suivants reculent.
app.delete('/api/equipment/:id', (req, res) => {
  const found = readIndex(req.params.id);

  if (found.message) {
    return res.status(found.status).json({ message: found.message });
  }

  const removed = equipment.splice(found.index, 1)[0];
  res.status(200).json(removed);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '127.0.0.1', err => {
  if (err) {
    console.error(`Cannot start on port ${PORT}: ${err.message}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
