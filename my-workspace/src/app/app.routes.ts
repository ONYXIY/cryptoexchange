import { Route } from '@angular/router';
import { HomePageComponent, TradingComponent } from '@my-workspace/homepage';

export const appRoutes: Route[] = [
    {path: '', component: HomePageComponent },
    {path: 'trading', component: TradingComponent}
];
