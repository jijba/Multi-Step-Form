import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Work }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
    title = 'Social Profiles';
    heading='Your presence on social network';
    workType: Work;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.workType = this.formDataService.getWork();
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setWork(this.workType);
        return true;
    }

    goToPrevious(form: any) {
            this.save(form);
            // Navigate to the personal page
            this.router.navigate(['/personal']);
        
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the details page
            this.router.navigate(['/details']);
        }
    }
}