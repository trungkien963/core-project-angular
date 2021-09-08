import { Injectable } from "@angular/core";
import { dark } from "src/assets/themes/dark";
import { defaultTheme } from "src/assets/themes/default";
import { light } from "src/assets/themes/light";
import { Theme } from "../interfaces/ThemeInterface";

@Injectable({
    providedIn: 'root'
})

export class ThemeService {

    private active: Theme = defaultTheme;
    private availableThemes: Theme[] = [light, dark, defaultTheme];

    constructor() {
        this.setDefaultTheme();
     }

    setDefaultTheme() {
        this.setActiveTheme(defaultTheme);
    }

    setDarkTheme(): void {
        this.setActiveTheme(dark);
    }

    setLightTheme(): void {
        this.setActiveTheme(light);
    }

    setActiveTheme(theme: Theme): void {
        this.active = theme;

        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            );
        });
    }
}