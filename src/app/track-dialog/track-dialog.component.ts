import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-track-dialog',
  templateUrl: './track-dialog.component.html',
  styleUrls: ['./track-dialog.component.css']
})

export class TrackDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TrackDialogComponent>
  ) {
    console.log(data[0].deviceType);
   }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
