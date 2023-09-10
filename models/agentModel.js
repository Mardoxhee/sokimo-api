const mongoose = require("mongoose");
const validator = require("validator");

const agentSchema = new mongoose.Schema({
    numero: {
      type: Number,
      unique: true, // Assurez-vous que le numéro est unique
      min: 1,
      max: 9999, // Limitez la plage de numéros de 1 à 9999
    },
    nom: {
      type: String,
      required: [true, "Renseignez le nom"],
    },
    postnom: {
        type: String,
        required: [true, "Renseignez le postnom"],
      },
    prenom: {
        type: String,
        required: [true, "Renseignez le prenom"],
      },
    lieuNaissance: {
        type: String,
      },
    dateNaissance: {
        type: Date,
      },
    nationalite: {
        type: String,
      },
    genre: {
        type: String,
        required: [true, "Renseignez le genre"],
      },  
    provinceaffectation: {
        type: String,
      },
    territoireaffectation: {
        type: String,
      },
    etatcivile: {
        type: String,
        required: [true, "renseignez votre état civile"],
      },
    adressehome: {
        type: String,
        required: [true, "Renseignez l adresse"],
      },
    tel: {
        type: Number,
        required: [true, "Renseignez le numéro de téléphone"],
      },
    email: {
        type: String,
        validate: [validator.isEmail, "Vérifiez que vous avez bien saisi l'adresse mail svp !'"]
      },
    matricule: {
        type: String,
        required: [true, "Renseignez le numéro matricule"],
      },
    direction: {
        type: String,
      },
    division: {
        type: String,
      },
    bureau: {
        type: String,
      },
      grade: {
        type: String,
    },
    fonction: {
      type: String,
  },
    inss: {
        type: String,
        required: [true, "Renseignez le numéro inss"],
      },

    diplome: {
        type: String,
        required: [true, "Renseignez le numéro inss"],
      },
    salaire: {
        type: Number,
        required: [true, "Renseignez votre salaire"],
      },
    nombreenfants: {
        type: Number,
      },
    datengagement: {
        type: Date,
        required: [true, "Renseignez la date d affectation"],
      },
    photo: {
        type: String,
        required: [true, "Renseignez la photo de l agent"],
      },
})

const Agents = mongoose.model("Book", agentSchema);
module.exports = Agents;