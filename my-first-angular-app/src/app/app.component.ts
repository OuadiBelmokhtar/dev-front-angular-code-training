import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // injection des dep via le constructeur

  constructor(private appServ: AppService) {

  }

  info = this.appServ.getInfo();
  commentaires = this.appServ.getAllCommentaires();
  commentaire = {
    id: 0,
    message: '',
    date: new Date()
  }

  addCommentaire() {
    let com: any = {
      id: this.commentaires.length + 1,
      message: this.commentaire.message,
      date: new Date()
    }
    this.appServ.addCommentaire(com);
    this.commentaires = this.appServ.getAllCommentaires();
    this.commentaire.message = '';
  }

}
