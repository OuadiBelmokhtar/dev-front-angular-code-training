import { Injectable } from "@angular/core";

@Injectable()
export class AboutService {
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

    public addCommentaire(formCom:any): void {
        if (formCom.message != '') {
            formCom.date=new Date();
            this.commentaires.push(formCom);
        }
    }

}