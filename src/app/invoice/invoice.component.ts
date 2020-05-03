import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { 
    // console.log('invoice');
    
      // console.log(this.val.price);
      
    }

  // @Input('mainInvoice') val:Object;
  // mainInvoice;
  val
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.val = params['mainInvoice'];
    });
  }



}
