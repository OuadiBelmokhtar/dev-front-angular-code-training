
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ImageService } from 'src/services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  motCle: string = "";
  listPhotos: any;

  constructor(private http: HttpClient, private imgService: ImageService) { }

  ngOnInit(): void {
  }

  onSearchPhotos(formData: any) {
    // console.log(formData.motCle); // pr le debogage
    let uri = "https://pixabay.com/api/?key=25939016-200c09cf9d7cdd3e0bfaa0368&q=" + formData.motCle + "&image_type=photo&per_page=10&page=1";
    this.http.get(uri)
      .subscribe(resp => this.listPhotos = resp);
    //console.log(this.listPhotos?.total);// ? racourcie pr verifier que listPhotos!=nundefined
    
  }

  onDetailsPhoto(imgDetails: any) {
    //console.log(imgDetails);
    this.imgService.handleDetailsImage(imgDetails);
  }
}
