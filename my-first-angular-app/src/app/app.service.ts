import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    private info = {
        nom: 'Ouadi',
        email: 'ouadi.belmokhtar@gmail.com',
        tel: '0668829641 '
    }
    private commentaires: any = [];
    //**commentaireIsEmty = this.commentaire.message == '' ? true : false; // pr activer/desactiver le button

    public getInfo() {
        return this.info;
    }

    public getAllCommentaires() {
        return this.commentaires;
    }

    public addCommentaire(c: any): void {
        if (c.message != '') {
            this.commentaires.push(c);
        }
    }

}