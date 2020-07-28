import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './gallary/gallary.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { IntroComponent } from './intro/intro.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientsComponent } from './clients/clients.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContentComponent } from './content/content.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: IntroComponent },
  { path: 'Testimonials', component: TestimonialsComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Gallery', component: GallaryComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'Services', component: ContentComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
