import {Request, Response} from 'express';
import {ContactController} from '../controllers/crmController';

export class Routes {
    public contactController = new ContactController();

    public routes(app: any): void {
        app.route('/').get(this.contactController.getContacts);

        app.route('/contact')
            .get(((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Get Request Successfull!'
            });
        }))
            .post(this.contactController.addNewContact);
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
