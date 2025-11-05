const { createSession, destroySession } = require('../utils/sessionManager');
const bcrypt = require('bcrypt');
const fs = require('fs');

const path = require('path');

const usersFile = path.join(__dirname, '../data', 'users.json');

//se activa al recibir el post login
const login = async (req, res) => {
    const { username, password } = req.body;

    const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
    } 

    // Validar hash con bcrypt
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = createSession(username);
    return res.json({ token });
};
//Obtenemos el token http para desttruirlo
const logout = async (req, res) => {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: 'No autorizado' });

    const token = auth.split(' ')[1];
    destroySession(token);
    res.json({ message: 'Sesión cerrada' });
};

module.exports = { login, logout };
