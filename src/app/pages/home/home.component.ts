import { CurrencyPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonComponent } from "../../button/button.component";
import { ImageComponent } from "../../image/image.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CurrencyPipe, ImageComponent, ButtonComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
