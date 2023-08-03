/* ICONS  */
import DashboardIcon from '@assets/dashboard.png';
import OrdersIcon from '@assets/checkout.png';
import ProductsIcon from '@assets/product.png';
import CustomersIcon from '@assets/customer.png';
import AnalyticsIcon from '@assets/analytics.png';
import DiscountIcon from '@assets/discount.png';
import InventoryIcon from '@assets/inventory.png';
import ShippingIcon from '@assets/shipping.png';
import ReturnsIcon from '@assets/product-return.png';
import SettingsIcon from '@assets/settings.png';

/* COMPONENTS */
import Dashboard from '../../components/admin/Dashboard';
import Orders from '../../components/admin/Orders';
import Products from '../../components/admin/Products';
import Customers from '../../components/admin/Customers';
import Analytics from '../../components/admin/Analytics';
import Discounts from '../../components/admin/Discounts';
import Inventory from '../../components/admin/Inventory';
import Shipping from '../../components/admin/Shipping';
import Returns from '../../components/admin/Returns';
import Settings from '../../components/admin/Settings';

export const contentItems = [
  {
    listItemName: 'Dashboard',
    path: '/dashboard',
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    listItemName: 'Orders',
    path: '/orders',
    icon: OrdersIcon,
    component: Orders,
  },
  {
    listItemName: 'Products',
    path: '/products',
    icon: ProductsIcon,
    component: Products,
  },
  {
    listItemName: 'Customers',
    path: '/customers',
    icon: CustomersIcon,
    component: Customers,
  },
  {
    listItemName: 'Analytics',
    path: '/analytics',
    icon: AnalyticsIcon,
    component: Analytics,
  },
  {
    listItemName: 'Discounts/Coupons',
    path: '/discounts',
    icon: DiscountIcon,
    component: Discounts,
  },
  {
    listItemName: 'Inventory',
    path: '/inventory',
    icon: InventoryIcon,
    component: Inventory,
  },
  {
    listItemName: 'Shipping',
    path: '/shipping',
    icon: ShippingIcon,
    component: Shipping,
  },
  {
    listItemName: 'Returns/Refunds',
    path: '/returns',
    icon: ReturnsIcon,
    component: Returns,
  },
  {
    listItemName: 'Settings',
    path: '/settings',
    icon: SettingsIcon,
    component: Settings,
  },
];
