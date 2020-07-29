import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GallaryComponent } from './gallary/gallary.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContentComponent } from './content/content.component';
import { IntroComponent } from './intro/intro.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientsComponent } from './clients/clients.component';
import { HeaderComponent } from './header/header.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageBorderComponent } from './page-border/page-border.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PlogComponent } from './plog/plog.component';
import { PagenationComponent } from './pagenation/pagenation.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InputComponent } from './Shared/input/input.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GallaryComponent,
    TestimonialsComponent,
    ContentComponent,
    IntroComponent,
    PricingComponent,
    ClientsComponent,
    HeaderComponent,
    SocialMediaComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
    PageBorderComponent,
    BlogsComponent,
    PlogComponent,
    PagenationComponent,
    LogInComponent,
    SignUpComponent,
    ContactUsComponent,
    InputComponent,
    PreLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
