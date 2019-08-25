"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
class ContactController {
    addNewContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newContact = new Contact(req.body);
            try {
                let contact = yield newContact.save();
                res.json(contact);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
    getContacts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contacts = yield Contact.find({});
                res.status(200).json(contacts);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
    getContactWithID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contact = yield Contact.findById(req.params.contactId);
                res.status(200).json(contact);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
    updateContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contact = yield Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true });
                res.status(200).json(contact);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
    deleteContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Contact.remove({ _id: req.params.contactId });
                res.status(200).json({ message: "Deleted" });
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        });
    }
}
exports.ContactController = ContactController;
