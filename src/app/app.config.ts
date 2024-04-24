import { ApplicationConfig } from "@angular/core";
import { provideImageKitLoader } from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
    provideImageKitLoader(
      "https://ik.imagekit.io/jgerard/fem-product-preview-card-component",
    ),
  ],
};
