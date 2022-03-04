import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-img-details',
  templateUrl: './img-details.component.html',
  styleUrls: ['./img-details.component.css']
})
export class ImgDetailsComponent implements OnInit {
  imgDetails: any;
  constructor(private imgService: ImageService) { }

  ngOnInit(): void {
    this.imgDetails = this.imgService.imageDetails;
  }

}
