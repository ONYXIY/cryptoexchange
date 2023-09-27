import { TradingComponent } from './../../libs/exchange/trading/trading.component';
import { HomePageComponent } from '../../libs/exchange/homePage-view/home-page.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', component: HomePageComponent},
    {path: 'trading', component: TradingComponent}
];
