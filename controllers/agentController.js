const Agent = require("../models/agentModel");

//Ici on a le controlleur de création d'un agent
exports.createAgent = async (req, res) => {
  try {
    // Trouvez le dernier agent pour obtenir le numéro suivant
    const dernierAgent = await Agent.findOne({}, {}, { sort: { numero: -1 } });
    const numeroSuivant = dernierAgent ? dernierAgent.numero + 1 : 1;

    // Créez le nouvel agent avec le numéro attribué
    const newAgent = await Agent.create({ ...req.body, numero: numeroSuivant });

    res.status(201).json({
      status: "Agent enregistré avec succès !",
      newAgent,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      code: err.code,
      message: err.message,
    });
  }
};
  //Le controlleur d'affichage de tous les agents
  exports.getAgents = async (req, res) => {
    try {
      const agents = await Agent.find();
      res.status(200).json({
        status: "Success",
        numberOfAgents: agents.length,
        agents: agents
      });
    } catch (err) {
      res.status(400).json({
        status: "failed",
        message: err.message,
      });
    }
  };
 //Le controlleur d'affichage d'un agent à la fois
exports.getOneAgent= async (req, res) => {
        try {
          const agent = await Agent.findById(req.params.id);
          res.status(200).json({
            status: "success",
            agent,
          });
        } catch (err) {
          res.status(400).json({
            status: "failed",
            message: err.message,
          });
        }
      };
//Le controlleur de mise à jour d'un agent

            exports.updateAgent = async (req, res) => {
                try {
                const agent = await Agent.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                });
                res.status(200).json({
                    statusstatus: "success",
                    agent,
                });
                } catch (err) {
                res.status(400).json({
                    status: "failed",
                    message: err.message,
                });
                }
            };
                    //Le controlleur de suppression d'un agent

            exports.deleteAgent = async (req, res) => {
                try {
                  await Agent.findByIdAndDelete(req.params.id);
                  res.status(200).json({
                    status: "agent deleted successfully",
                    data: null,
                  });
                } catch (err) {
                  res.status(404).json({
                    status: "not found",
                    message: err.message,
                  });
                }
              };