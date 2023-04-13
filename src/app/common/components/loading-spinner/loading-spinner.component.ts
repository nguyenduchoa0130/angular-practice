import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingSpinnerService } from '../../services/loading-spinner.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  isLoading$: Observable<boolean>;

  constructor(private _loadingSpinnerService: LoadingSpinnerService) {}

  ngOnInit(): void {
    this.isLoading$ = this._loadingSpinnerService.getLoading();
  }
}
