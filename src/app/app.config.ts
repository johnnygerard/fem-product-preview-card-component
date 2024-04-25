import { ApplicationConfig } from "@angular/core";
import { provideImageKitLoader } from "@angular/common";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideImageKitLoader(
      "https://ik.imagekit.io/jgerard/fem-product-preview-card-component",
    ),
  ],
};
