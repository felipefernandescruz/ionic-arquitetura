import { PlaceType } from '../enums/place-type.enum';

export class PlaceRegisterModel {

    name: string;
    picture: any;
    phone: number;
    capacity: number;
    description: string;
    location:{
        lat:number,
        lng:number
    };
    admin?:number;
    type: number;
   // permission: PlaceType;

    constructor() {
        this.name = '';
        this.picture='./assets/imgs/login-background.jpg';
        this.phone = null;
        this.capacity = 0;
        this.location = null;
        this.admin = null;
        this.type = null;
  //      this.permission = new PlaceType(0,"no Definition");
    }
}
