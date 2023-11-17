import { Component } from '@angular/core';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { PrivacyComponent } from '../privacy/privacy.component';
import { TermsComponent } from '../terms/terms.component';
import { TermsMobileComponent } from '../terms-mobile/terms-mobile.component';
import { PrivacyMobileComponent } from '../privacy-mobile/privacy-mobile.component';





@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent {
  features = [
    {
      title: 'Emergency SOS Alerts',
      details: 'With a single tap, alert the nearest members of your network based on your live location in emergencies. They receive your distress signal and real-time location, ensuring swift help. SafeStone is your personal safety net, offering peace of mind and immediate support when you need it most.',
      imageSource: '/assets/sos.png',
    },
    {
      title: 'Caution Mode',
      details: 'Caution Mode alerts your safe circles, keeping them informed when you need to exercise extra caution. Stay connected and supported wherever you go.',
      imageSource: '/assets/caution.png',
    },
    {
      title: 'Safety Ratings',
      details: 'Rate and share your safety experiences on SafeStone. Your feedback helps others make informed decisions about places they visit. Together, we create a safer community and promote awareness for a secure environment.',
      imageSource:'/assets/safety.png',
    },
    {
      title:'SafeFeed',
      details:'Safe Feed on SafeStone is an interactive platform that encourages open conversations about safety. Discover, share, and engage in discussions about all things safety-related. It\'s a welcoming space where ideas thrive, fostering a community dedicated to creating a safer world.',
      imageSource:'/assets/scws2.png',
    },
    
  ];
  expandedFeatureIndex: number | null = 1;
  selectedFeatureImage: string | null = this.features[1].imageSource;

  toggleFeature(index: number) {
    if (this.expandedFeatureIndex === index) {
      // Clicked the already expanded card, so close it
      this.expandedFeatureIndex = null;
      this.selectedFeatureImage = null; // Clear the selected image
    } else {
      // Clicked a different card or closed card, so expand it
      this.expandedFeatureIndex = index;
      this.selectedFeatureImage = this.features[index].imageSource; // Set the selected image
    }
  }

  redirectToDemo() {
    window.location.href = 'https://forms.gle/CEBAuCytbPrpHZuSA'; // Replace with the desired URL
  }
  constructor(public dialog: MatDialog) { }
  openPrivacyPolicy(): void {
    this.dialog.open(PrivacyComponent, {
      width: '80vw',
      height: '90vh',     
      backdropClass: 'custom-backdrop'
    });
  }

  openPrivacyPolicyMobile(): void {
    this.dialog.open(PrivacyMobileComponent, {
      width: '90%',
      height: '80%'
    });
  }

  openTerms(): void {
    this.dialog.open(TermsComponent, {
      width: '80vw',
      height: '90vh'
    });
  }

  openTermsMobile(): void {
    this.dialog.open(TermsMobileComponent, {
      width: '90%',
      height: '80%'
    });
  }

  closeDialog():void{
    this.dialog.closeAll();
  }
  
}