import { Injectable} from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Country} from '../model/model.component';

const main_url = "http://localhost:8080/rest/v2";
const country_url = "/country";

@Injectable()
export class ServiceCountry{
  constructor(private http:HttpClient){}

  getAllCountry(){
    return this.http.get<Array<Country>>(main_url+country_url + "/getcountrylist");
  }

  insertCountry(country:Country){
    return this.http.post(main_url+country_url,country)
  }

  updateCountry(country:Country){
    return this.http.put(main_url+country_url,country)
  }
  delete(id:number){
    return this.http.delete(main_url+country_url+"/"+id)
  }

}


