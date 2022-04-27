import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Dashboad', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
                    { label: 'Validation Services', icon: 'pi pi-fw pi-home', routerLink: ['/validation-services'] },
                    { label: 'Internal Conformance Test', icon: 'pi pi-fw pi-home', routerLink: ['/internal-conformance-tests'] },
                    { label: 'External Conformance Test', icon: 'pi pi-fw pi-home', routerLink: ['/external-conformance-tests'] },
                    { label: 'Status', icon: 'pi pi-fw pi-home', routerLink: ['/status'] },
                    // { label: 'ISO Templates', icon: 'pi pi-fw pi-home', routerLink: ['/iso-templates'] },
                    // { label: 'Custom Templates', icon: 'pi pi-fw pi-home', routerLink: ['/custom-templates'] }
                ]
            }

        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement>event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
