import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Details }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-details'
    ,templateUrl: './details.component.html'
})

export class DetailsComponent implements OnInit {
    title = 'Personal Details';
    heading='We will never sell it!';
    details: Details;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.details = this.formDataService.getDetails();
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setDetails(this.details);
        return true;
    }

    goToPrevious(form: any) {
            this.save(form);
            // Navigate to the work page
            this.router.navigate(['/work']);
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['/result']);
        }
    }
}