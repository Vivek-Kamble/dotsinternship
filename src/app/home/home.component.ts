import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  listoftest=[
                {
                  name:"Lipid profile",
                  price:99
                },
                {
                  name:"Liver Function Test",
                  price:199
                },
                {
                  name:"Kidney Function Test",
                  price:399
                },
                {
                  name:"Urine Routine & Microscopy",
                  price:99
                },
                {
                  name:"Complete Hemogram",
                  price:199
                },
                {
                  name:"HbA1c",
                  price:99
                },
                {
                  name:"Thyroid Profile",
                  price:149
                },
                {
                  name:"Blood Glucose Fasting",
                  price:99
                }
  ]
  temp=[]
  // listofsearch=["Lipid profile","Liver Function Test","Kidney Function Test","Kidney Function Test","Urine Routine & Microscopy",
  // "Complete Hemogram","HbA1c","Thyroid Profile-Total","Blood Glucose Fasting"]
  // listofsearch=this.listoftest.forEach((item)=>{item.name});
  listdisplay=true;
  totalprice=0;
  totallist;
  res;
  totalpackage=true;
  ngOnInit(): void {
  }

  func(a)
  {
    console.log(a)
  }
  addtolist(i)
  {
    this.temp.push(this.listoftest[i]);
  }
  total()
  {
    this.totalpackage=false;
    // this.totalprice=0;
    console.log(this.temp);
    this.temp.forEach(element => {
      // console.log(element.price);
      
      this.totalprice=this.totalprice+element.price;
      // console.log(typeof(this.totalprice));
      // console.log(this.totalprice);
      
      
    });
    // console.log(this.res);
    // console.log(this.invoice(this.temp,this.totalprice));
    
    
  }
  mainInvoice;
  invoice(name,price)
  {
    this.totallist=name,
    this.totalprice=price
    // console.log(this.totallist[0].name+"   v   " +this.totalprice)
    this.mainInvoice={
      list:this.totallist,
      price:this.totalprice
    }
    console.log(this.mainInvoice)
  }
}
