import * as mongoose from 'mongoose';
import {ContactSchema} from "../models/crmModel";
import {Request,Response} from "express";
const Contact = mongoose.model('Contact',ContactSchema);

export class ContactController {
   public async addNewContact(req:Request,res:Response){
       let newContact = new Contact(req.body);
       try {
           let contact = await newContact.save();
           res.json(contact);
       }catch (e) {
           res.status(500).send(e.message);
       }
   }

   public async getContacts(req:Request,res:Response){
       try {
           let contacts = await Contact.find({});
           res.status(200).json(contacts);
       }catch (e) {
           res.status(500).send(e.message);
       }
   }

   public async getContactWithID(req:Request,res:Response){
       try {
           let contact = await Contact.findById(req.params.contactId);
           res.status(200).json(contact);
       }catch (e) {
           res.status(500).send(e.message);
       }
   }

   public async updateContact(req:Request,res:Response){
       try {
           let contact = await Contact.findOneAndUpdate({_id:req.params.contactId},req.body,{new:true});
           res.status(200).json(contact);
       }catch (e) {
           res.status(500).send(e.message);
       }
   }

   public async deleteContact(req:Request,res:Response){
       try {
           await Contact.remove({_id:req.params.contactId});
           res.status(200).json({message:"Deleted"});
       }catch (e) {
           res.status(500).send(e.message);
       }
   }
}
