import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './service/app.config.service';
import { ValidationService } from './service/validation.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import {MenuModule} from 'primeng/menu';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {StepsModule} from 'primeng/steps';

import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';

import { LoginComponent } from './components/login/login.component';
import { XmlValidationComponent } from './components/xml-validation/xml-validation.component';
import { InsightsComponent } from './components/insights/insights.component';
import { InternalConformanceTestsComponent } from './components/internal-conformance-tests/internal-conformance-tests.component';
import { ExternalConformanceTestsComponent } from './components/external-conformance-tests/external-conformance-tests.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ButtonModule,
        DialogModule,
        TableModule,
        FileUploadModule,
        DropdownModule,
        CheckboxModule,
        MenuModule,
        InputTextareaModule,
        StepsModule
        
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        LoginComponent,
        XmlValidationComponent,
        InsightsComponent,
        InternalConformanceTestsComponent,
        ExternalConformanceTestsComponent,
        StatusComponent
    ],
    providers: [
        ConfigService,
        ValidationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
