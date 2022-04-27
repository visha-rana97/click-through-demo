import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AppMainComponent } from './app.main.component';
import { InsightsComponent } from './components/insights/insights.component';
import { XmlValidationComponent } from './components/xml-validation/xml-validation.component';
import { InternalConformanceTestsComponent } from './components/internal-conformance-tests/internal-conformance-tests.component';
import { ExternalConformanceTestsComponent } from './components/external-conformance-tests/external-conformance-tests.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    { path: 'dashboard', component: InsightsComponent },
                    { path: 'validation-services', component: XmlValidationComponent },
                    { path: 'internal-conformance-tests', component: InternalConformanceTestsComponent },
                    { path: 'external-conformance-tests', component: ExternalConformanceTestsComponent },
                    { path: 'status', component: StatusComponent },
                ],
            },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'login' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
