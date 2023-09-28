import { TradingComponent } from './../../libs/exchange/src/lib/trading/trading.component';
import { Route } from '@angular/router';
import { HomePageComponent } from '@my-workspace/homepage';

export const appRoutes: Route[] = [
    {path: '', component: HomePageComponent },
    {path: 'trading', component: TradingComponent}
];
