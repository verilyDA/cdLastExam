import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['../app.component.css']
})
export class RestListComponent implements OnInit {
  rests: Restaurant[] = [];
  constructor(
    private service: RestaurantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRestaurants();
  }
  getRestaurants(): void {
    this.service.getRestaurants()
      .subscribe(rests => this.rests = rests);
  }
  readReview(id: string): void{
    this.router.navigateByUrl('/review/' + id);
  }
  update(id: string): void{
    this.router.navigateByUrl('/edit/' + id);
  }
  delete(id: string): void{
    this.service.deleteRest(id)
      .subscribe(() => this.router.navigateByUrl('refresh'));
  }
  newR(): void{
    this.router.navigateByUrl('add');
  }
}
