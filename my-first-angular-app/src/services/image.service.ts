import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()
export class ImageService {
    private _imageDetails: any;

    constructor(private router:Router){

    }

    public get imageDetails() {
        return this._imageDetails;
    }

    public set imageDetails(imgDetails) {
        this._imageDetails = imgDetails;
    }

    handleDetailsImage(imgDetails:any){
        this._imageDetails=imgDetails;
        this.router.navigate(['imgdetails']);
    }

}