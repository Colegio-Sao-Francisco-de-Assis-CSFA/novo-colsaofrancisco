const authController = {
    async enviarEmail (req, res) {

        try{
            const { email } = req.body;
            if (!email) return res.status(400).json({ error: "E-mail é obrigatório" });
            const token = Math.random().toString(36).substring(2, 15);
            console.log(`Token gerado para ${email}: ${token}`);
            res.json({ message: "E-mail enviado!", token });
        } catch{
            console.error("❌ Erro ao listar questões:", error);
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = authController;