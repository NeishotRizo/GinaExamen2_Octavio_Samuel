//endpoint ppara verificar si el usuario sigue activbo sesion
const session = async (req, res) => {
    res.json({
        ok: true,
        msg: 'Session is valid'
    });
}

module.exports = { session }