import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Product } from '../../../shared/models/product';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
// альтернативный вариант обновления корзины.
// можно использовать или нет, на ваше усмотрение
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {
  // products: Map<Product, number>;

  constructor(
    private cartService: CartService,
    // private cdr: ChangeDetectorRef
  ) { }

  get products() {
    return this.cartService.products;
  }

  ngOnInit(): void {
    // this.products = this.cartService.products;
  }

  onChangeItemNumber(item: CartItem): void {
    this.cartService.changeItemNumber(item.product, item.count);
  }

  onRemoveItem(product: Product): void {
    this.cartService.removeItem(product);
  }

  get numberOfGoods(): number {
    return this.cartService.itemsNumber;
  }

  get sumOfGoods(): number {
    return this.cartService.sum;
  }

  // refresh(): void {
  //   this.cdr.markForCheck();
  // }
}
