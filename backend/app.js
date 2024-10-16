const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newClient = await prisma.client.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Error registering client' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
