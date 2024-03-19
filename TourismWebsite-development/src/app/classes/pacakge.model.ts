export class Package{
    public id : number;
    public location : string;
    public numberofDays : number;
    public price : number;
    public description : string;
    public picture? : string;

    constructor(id : number,location: string ,numberofDays : number,price : number, description : string,picture: string){
        this.location=location;
        this.numberofDays=numberofDays;
        this.price=price;
        this.description=description;
        this.id=id;
        this.picture=picture;
    }

}