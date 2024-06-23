const Publication = require('../models/publications');

exports.publier = (req, res, next) => {
    const pub = new Publication({
        ...req.body
    });
    pub.save()
        .then(() => res.status(200).json({ message: "information publiée" }))
        .catch(err => res.status(500).json({ err }));
};

exports.getall = (req, res, next) => {
    Publication.find()
       .then(publications => res.status(200).json(publications))
       .catch(err => res.status(500).json({ err }));
};

exports.getone = (req, res, next) => {
    Publication.findOne({ _id: req.params.id })
       .then(publication => res.status(200).json(publication))
       .catch(err => res.status(500).json({ err }));
};
exports.update = (req, res, next) => {
    Publication.updateOne({ _id: req.params.id }, {...req.body, _id:req.params.id})
       .then(() => res.status(200).json({ message: "publication modifiée" }))
       .catch(err => res.status(500).json({ err }));
};
exports.deleteone = (req, res, next) => {
    Publication.deleteOne({ _id: req.params.id })
       .then(() => res.status(200).json({ message: "publication supprimée" }))
       .catch(err => res.status(500).json({ err }));
};