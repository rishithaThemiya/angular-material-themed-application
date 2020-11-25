import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { ServiceCountry}  from '../service/service.component';
import { Country} from '../model/model.component';
import { Router} from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  desc: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', symbol: 'H'},
//   {position: 2, name: 'Helium', symbol: 'He'},
//   {position: 3, name: 'Lithium',symbol: 'Li'},
//   {position: 4, name: 'Beryllium', symbol: 'Be'},
//   {position: 5, name: 'Boron', symbol: 'B'},
//   {position: 6, name: 'Carbon', symbol: 'C'},
//   {position: 7, name: 'Nitrogen', symbol: 'N'},
//   {position: 8, name: 'Oxygen', symbol: 'O'},
//   {position: 9, name: 'Fluorine', symbol: 'F'},
//   {position: 10, name: 'Neon',  symbol: 'Ne'},
// ];

@Component({
      selector: 'app-crud-country',
      templateUrl: './crud-country.component.html',
      styleUrls: ['./crud-country.component.css']
      })

export class CrudCountryComponent implements OnInit{

          displayedColumns: string[] = ['id', 'name', 'delete','edit'];
          dataSource = new MatTableDataSource<any[]>();
          countryArray = new Array<Country>();

          constructor(private countryservice:ServiceCountry,private route:Router){}
                   ngOnInit(): void {
                  this.getAllCountry();
                 }

          getAllCountry() {
                this.countryservice.getAllCountry().subscribe(response=>{
                this.countryArray = response;
                //@ts-ignore
                this.dataSource.data = this.countryArray;
                  })
          }
            //check out this
          newCountry(){
            this.route.navigate(['newcountry'])
          }

          edit(id:number){
            this.route.navigate(['newcountry',id])
          }

          delete(id:any){
            this.countryservice.delete(id).subscribe(res=>{
              if(res == ""){
                alert("success")
                this.getAllCountry()
              }else{
                alert("failed")
              }
            })
          }


 

}
