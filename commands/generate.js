const fs = require('fs');
const { colord, extend } = require("colord");
const mixPlugin = require("colord/plugins/mix")

extend([mixPlugin]);

function generate (color1, color2, color3) {

    console.log(color1, color2, color3)

    //https://lukapeharda.com/article/how-to-generate-a-full-Tailwind-CSS-palette-from-a-single-color/
    //https://github.com/lukapeharda/tailwindcss-color-palette-generator/blob/main/src/PaletteGenerator.php

    const cd1 = colord("#"+color1);
    const cd2 = colord("#"+color2);
    const cd3 = colord("#"+color3);
    
    var createPal = (color)=>{
        return [
            color.lighten(0.6).toRgb(),
            color.lighten(0.45).toRgb(),
            color.lighten(0.3).toRgb(),
            color.lighten(0.15).toRgb(),
            color.toRgb(),
            color.darken(0.08).toRgb(),
            color.darken(0.16).toRgb(),
            color.darken(0.24).toRgb(),
            color.darken(0.32).toRgb(),
            color.darken(0.4).toRgb(),
        ]
    }

    var neutral = createPal(cd1)
    var primary = createPal(cd2)
    var secondary = createPal(cd3)

    var res = ":root { --color-neutral: 255, 255, 255;\n"
    
    res += "--color-neutral-50:     "+neutral[0].r+","+neutral[0].g+","+neutral[0].b+";\n"
    res += "--color-neutral-100:    "+neutral[1].r+","+neutral[1].g+","+neutral[1].b+";\n"
    res += "--color-neutral-200:    "+neutral[2].r+","+neutral[2].g+","+neutral[2].b+";\n"
    res += "--color-neutral-300:    "+neutral[3].r+","+neutral[3].g+","+neutral[3].b+";\n"
    res += "--color-neutral-400:    "+neutral[4].r+","+neutral[4].g+","+neutral[4].b+";\n"
    res += "--color-neutral-500:    "+neutral[5].r+","+neutral[5].g+","+neutral[5].b+";\n"
    res += "--color-neutral-600:    "+neutral[6].r+","+neutral[6].g+","+neutral[6].b+";\n"
    res += "--color-neutral-700:    "+neutral[7].r+","+neutral[7].g+","+neutral[7].b+";\n"
    res += "--color-neutral-800:    "+neutral[8].r+","+neutral[8].g+","+neutral[8].b+";\n"
    res += "--color-neutral-900:    "+neutral[9].r+","+neutral[9].g+","+neutral[9].b+";\n"

    res += "--color-primary-50:     "+primary[0].r+","+primary[0].g+","+primary[0].b+";\n"
    res += "--color-primary-100:    "+primary[1].r+","+primary[1].g+","+primary[1].b+";\n"
    res += "--color-primary-200:    "+primary[2].r+","+primary[2].g+","+primary[2].b+";\n"
    res += "--color-primary-300:    "+primary[3].r+","+primary[3].g+","+primary[3].b+";\n"
    res += "--color-primary-400:    "+primary[4].r+","+primary[4].g+","+primary[4].b+";\n"
    res += "--color-primary-500:    "+primary[5].r+","+primary[5].g+","+primary[5].b+";\n"
    res += "--color-primary-600:    "+primary[6].r+","+primary[6].g+","+primary[6].b+";\n"
    res += "--color-primary-700:    "+primary[7].r+","+primary[7].g+","+primary[7].b+";\n"
    res += "--color-primary-800:    "+primary[8].r+","+primary[8].g+","+primary[8].b+";\n"
    res += "--color-primary-900:    "+primary[9].r+","+primary[9].g+","+primary[9].b+";\n"

    res += "--color-secondary-50:     "+secondary[0].r+","+secondary[0].g+","+secondary[0].b+";\n"
    res += "--color-secondary-100:    "+secondary[1].r+","+secondary[1].g+","+secondary[1].b+";\n"
    res += "--color-secondary-200:    "+secondary[2].r+","+secondary[2].g+","+secondary[2].b+";\n"
    res += "--color-secondary-300:    "+secondary[3].r+","+secondary[3].g+","+secondary[3].b+";\n"
    res += "--color-secondary-400:    "+secondary[4].r+","+secondary[4].g+","+secondary[4].b+";\n"
    res += "--color-secondary-500:    "+secondary[5].r+","+secondary[5].g+","+secondary[5].b+";\n"
    res += "--color-secondary-600:    "+secondary[6].r+","+secondary[6].g+","+secondary[6].b+";\n"
    res += "--color-secondary-700:    "+secondary[7].r+","+secondary[7].g+","+secondary[7].b+";\n"
    res += "--color-secondary-800:    "+secondary[8].r+","+secondary[8].g+","+secondary[8].b+";\n"
    res += "--color-secondary-900:    "+secondary[9].r+","+secondary[9].g+","+secondary[9].b+";\n"

    res += "}"

    console.log(res)


    fs.writeFileSync("output.css", res)
}


/**

colord("#ff0000").grayscale().alpha(0.25).toRgbString(); // "rgba(128, 128, 128, 0.25)"
colord("rgb(192, 192, 192)").isLight(); // true
colord("hsl(0, 50%, 50%)").darken(0.25).toHex(); // "#602020"

 */

module.exports = generate