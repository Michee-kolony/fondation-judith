const Message = require('../models/message');

exports.send = (req, res, next) => {
    const msg = new Message({
       ...req.body
    });
    msg.save()
       .then(() => res.status(200).json({ message: "message envoyé" }))
       .catch(err => res.status(500).json({ err }));
};

exports.getmessage = (req, res, next) => {
    Message.find()
       .then(messages => res.status(200).json(messages))
       .catch(err => res.status(500).json({ err }));
};
exports.getonemessage = (req, res, next) => {
    Message.findById(req.params.id)
       .then(message => res.status(200).json(message))
       .catch(err => res.status(500).json({ err }));
};
exports.updatemessage = (req, res, next) => {
    Message.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
       .then(() => res.status(200).json({ message: "message modifié" }))
       .catch(err => res.status(500).json({ err }));
};
exports.deletemessage = (req, res, next) => {
    Message.deleteOne({ _id: req.params.id })
       .then(() => res.status(200).json({ message: "message supprimé" }))
       .catch(err => res.status(500).json({ err }));
};