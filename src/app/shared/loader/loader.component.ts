import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  loading$ = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) {}
}
