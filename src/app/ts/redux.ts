export interface ActionState {
  isOpenAdminNavbar: boolean;
  orders: OrderTableState[];
  category: string;
}

// export interface RatingState {
//   rate: number;
//   count: number;
// }

// export interface ProductItemState {
//   id: number;
//   title: string;
//   price: string | number;
//   rating: RatingState;
//   image: string;
//   category: string;
//   description: string;
// }

export interface OrderTableState {
  username: string;
  email: string;
  date: string;
  status: string;
  totalPrice: string;
  orderActions: string;
}
