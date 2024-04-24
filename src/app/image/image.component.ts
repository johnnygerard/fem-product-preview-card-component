import { NgOptimizedImage, NgIf } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-image",
  standalone: true,
  imports: [NgOptimizedImage, NgIf, ButtonComponent],
  templateUrl: "./image.component.html",
  styleUrl: "./image.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  readonly IMG_NAME = "gabrielle-essence-eau-de-parfum.png";
  isMobile = this.#isMobile;

  @HostListener("window:resize")
  onResize(): void {
    this.isMobile = this.#isMobile;
  }

  get #isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
