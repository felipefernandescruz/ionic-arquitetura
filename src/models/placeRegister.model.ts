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

    constructor() {
        this.name = '';
        this.picture='./assets/imgs/splashscreen-resenhapp.png';
        this.phone = null;
        this.capacity = 0;
        this.location = null;
        this.admin = null;
        this.type = null;
    }
}
