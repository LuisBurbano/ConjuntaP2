const admin = require('firebase-admin');
const express = require('express');
const router = express.Router();

// Ruta para manejar la autenticación con Google
router.post('/login/google', async (req, res) => {
  const { token } = req.body;

  try {
    // Verifica el token de acceso de Google
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Obtiene las credenciales del usuario
    const { email, uid } = decodedToken;
    
    // Devuelve las credenciales del usuario o crea una nueva cuenta si no existe
    let userRecord = await admin.auth().getUserByEmail(email);
    if (!userRecord) {
      userRecord = await admin.auth().createUser({
        uid: uid,
        email: email
      });
    }

    // Devuelve el usuario autenticado
    res.status(200).json({ user: userRecord.toJSON() });
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante el proceso de autenticación
    console.error('Error during Google login:', error);
    res.status(500).json({ error: 'Error during Google login' });
  }
});

module.exports = router;
