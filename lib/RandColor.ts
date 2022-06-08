export function randColor()
{
    let randColor: any[] = [
        "#3A5BA0",
        "#1F4690",
        "#FFA500",
        "#34B3F1",
        "#590696",
        "#363062",
        "#371B58",
        "#247881",
        "#92B4EC",
        "#827397",
        "#126E82",
        "#F9D923",
        "#9A0680",
        "#8E3200",
      ];
      let randValue = Math.floor(Math.random() * randColor.length);
      let color = randColor[randValue];

      return color
}