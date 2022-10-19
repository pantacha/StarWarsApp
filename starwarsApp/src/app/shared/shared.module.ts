import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './menuItem/menu-item/menu-item.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
    declarations: [
        HeaderComponent,
        MenuItemComponent,
        ContainerComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        HeaderComponent,
        MenuItemComponent
    ],
    providers: [],
})
export class SharedModule {}