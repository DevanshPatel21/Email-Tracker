import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient,
    private deviceService: DeviceDetectorService
  ) { }

  trackEmail(emailId: string) {
    const deviceInfo = this.deviceService.getDeviceInfo();
    const trackingData = {
      emailId: emailId,
      deviceType: deviceInfo.deviceType,
      browser: deviceInfo.browser,
      os: deviceInfo.os,
      userAgent:deviceInfo.userAgent,
      browser_version:deviceInfo.browser_version,
      os_version:deviceInfo.os_version,

    };
    return this.http.post('http://localhost:3000/track-mail', trackingData);
  }
  fetch(emailId: string) {
    return this.http.get(`http://localhost:3000/track-mail?emailId=${emailId}`);
  }
}
