import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config.service';
import { AppConfig } from 'src/environments/environment.config';

@Component({
  selector: 'app-environment-badge',
  templateUrl: './environment-badge.component.html',
  styleUrls: ['./environment-badge.component.scss']
})
export class EnvironmentBadgeComponent implements OnInit {

  environment$: Observable<AppConfig> | undefined;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.environment$ = this.configService.getConfig();
  }
}
