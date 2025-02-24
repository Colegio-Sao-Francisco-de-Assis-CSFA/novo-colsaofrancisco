const setorMiddleware = (setoresPermitidos) => {
    return (req, res, next) => {
      if (!setoresPermitidos.includes(req.acesso)) {
        return res.status(403).json({ message: "Acesso negado! Permissão insuficiente." });
      }
      next();
    };
  };

  module.exports = setorMiddleware;
