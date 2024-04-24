import { CurrencyPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { ImageComponent } from "./image/image.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CurrencyPipe, ImageComponent, ButtonComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
