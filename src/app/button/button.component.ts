import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SvgCartIconComponent } from "../svg/svg-cart-icon/svg-cart-icon.component";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [SvgCartIconComponent],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
