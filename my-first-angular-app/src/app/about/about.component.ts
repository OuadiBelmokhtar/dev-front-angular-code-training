import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info: any;
  commentaires: any = [];
  commentaire: any = {
    id: 0,
    message: '',
    date: new Date()
  }

  ngOnInit(): void {
  }

  // injection des dep via le constructeur
  // init des attributs en appelant les mtds du service
  constructor(private appServ: AboutService) {
    this.info = this.appServ.getInfo();
    this.commentaires = this.appServ.getAllCommentaires();
  }

  /* Mtd1 utilisation d'un simple button:(click)+appel de fonction
        onAddCommentaire() {
          let com: any = {
            id: this.commentaires.length + 1,
            message: this.commentaire.message,
            date: new Date()
          }
        
          this.appServ.addCommentaire(com);
          this.commentaires = this.appServ.getAllCommentaires(); // rafraichir le tableau après l'ajout pr le data binding. Ce qui rafraichit automatiquement l'affichage ds la page web 
          this.commentaire.message = '';
        }
  */

  /* Mtd2 soumission d'un forumailre: ngForm+button submit */
  onAddCommentaire(formCom: any) {
    this.appServ.addCommentaire(formCom);
    // rafraichir le tableau après l'ajout, pr le data binding. Ce qui rafraichit automatiquement l'affichage ds la view
    this.commentaires = this.appServ.getAllCommentaires();
    this.commentaire.message = '';
  }
}
