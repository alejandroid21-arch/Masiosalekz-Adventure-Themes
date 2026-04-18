/**
 * Adventure Dice Themes
 * Compatible con Dice So Nice! 5.x
 *
 * Tres temas temáticos:
 *  - Waterdeep: Dragon Heist  → Azules profundos + detalles dorados
 *  - Descent into Avernus     → Rojo infernal + cadenas y llamas
 *  - Tomb of Annihilation     → Verde selva + calaveras y huesos
 */

Hooks.once("diceSoNiceReady", (dice3d) => {

  /* ─────────────────────────────────────────────
   * 1. WATERDEEP: DRAGON HEIST
   * Azul oceánico profundo, bordes dorados,
   * números en dorado reluciente
   * ───────────────────────────────────────────── */
  dice3d.addColorset({
    name: "dragonheist",
    description: "ADT.DragonHeist",
    category: "ADT.Category",
    foreground: "#FFD700",          // números dorados
    background: "#0D2B6E",          // azul marino profundo
    outline: "#C8A400",             // contorno dorado oscuro
    edge: "#1A4A9E",                // borde azul medio
    texture: "none",
    material: "glass",
    font: "Crimson Pro",
    fontScale: 1.0
  }, "default");

  /* ─────────────────────────────────────────────
   * 2. DESCENT INTO AVERNUS
   * Rojo magma/carbón, detalles como forja,
   * números en naranja llameante
   * ───────────────────────────────────────────── */
  dice3d.addColorset({
    name: "avernus",
    description: "ADT.Avernus",
    category: "ADT.Category",
    foreground: "#FF6B00",          // números naranja llama
    background: "#2A0000",          // negro-rojo carbón
    outline: "#8B0000",             // rojo sangre para contorno
    edge: "#5C0A00",                // borde rojo oscuro
    texture: "fire",                // textura interna de DSN (si disponible) o none
    material: "metal",
    font: "Crimson Pro",
    fontScale: 1.0
  }, "default");

  /* ─────────────────────────────────────────────
   * 3. TOMB OF ANNIHILATION
   * Verde selva oscuro, detalles hueso/marfil,
   * números en beige marfil
   * ───────────────────────────────────────────── */
  dice3d.addColorset({
    name: "tombofannihilation",
    description: "ADT.TombAnnihilation",
    category: "ADT.Category",
    foreground: "#F5E6C8",          // marfil antiguo para números
    background: "#1A3A1A",          // verde selva oscuro
    outline: "#8B7340",             // hueso/marrón para contorno
    edge: "#2E5C2E",                // borde verde medio
    texture: "none",
    material: "stone",
    font: "Crimson Pro",
    fontScale: 1.0
  }, "default");

  /* ─────────────────────────────────────────────
   * SISTEMA DE DADOS: presets con los colorsets
   * Esto crea entradas en el menú "Dice Presets"
   * ───────────────────────────────────────────── */

  // Preset Waterdeep
  dice3d.addSystem({
    id: "adt-dragonheist",
    name: "ADT.DragonHeist"
  }, "default");

  dice3d.addDicePreset({
    type: "d4",
    labels: ["1","2","3","4"],
    colorset: "dragonheist",
    system: "adt-dragonheist"
  });
  dice3d.addDicePreset({
    type: "d6",
    labels: ["1","2","3","4","5","6"],
    colorset: "dragonheist",
    system: "adt-dragonheist"
  });
  dice3d.addDicePreset({
    type: "d8",
    labels: ["1","2","3","4","5","6","7","8"],
    colorset: "dragonheist",
    system: "adt-dragonheist"
  });
  dice3d.addDicePreset({
    type: "d10",
    labels: ["1","2","3","4","5","6","7","8","9","10"],
    colorset: "dragonheist",
    system: "adt-dragonheist"
  });
  dice3d.addDicePreset({
    type: "d12",
    labels: ["1","2","3","4","5","6","7","8","9","10","11","12"],
    colorset: "dragonheist",
    system: "adt-dragonheist"
  });
  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "1","2","3","4","5","6","7","8","9","10",
      "11","12","13","14","15","16","17","18","19","20"
    ],
    colorset: "dragonheist",
    system: "adt-dragonheist"
  });
  dice3d.addDicePreset({
    type: "d100",
    labels: [
      "10","20","30","40","50","60","70","80","90","00"
    ],
    colorset: "dragonheist",
    system: "adt-dragonheist"
  });

  // Preset Avernus
  dice3d.addSystem({
    id: "adt-avernus",
    name: "ADT.Avernus"
  }, "default");

  for (const [type, faces] of Object.entries({
    d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d20: 20
  })) {
    dice3d.addDicePreset({
      type,
      labels: Array.from({ length: faces }, (_, i) => String(i + 1)),
      colorset: "avernus",
      system: "adt-avernus"
    });
  }
  dice3d.addDicePreset({
    type: "d100",
    labels: ["10","20","30","40","50","60","70","80","90","00"],
    colorset: "avernus",
    system: "adt-avernus"
  });

  // Preset Tomb of Annihilation
  dice3d.addSystem({
    id: "adt-tombofannihilation",
    name: "ADT.TombAnnihilation"
  }, "default");

  for (const [type, faces] of Object.entries({
    d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d20: 20
  })) {
    dice3d.addDicePreset({
      type,
      labels: Array.from({ length: faces }, (_, i) => String(i + 1)),
      colorset: "tombofannihilation",
      system: "adt-tombofannihilation"
    });
  }
  dice3d.addDicePreset({
    type: "d100",
    labels: ["10","20","30","40","50","60","70","80","90","00"],
    colorset: "tombofannihilation",
    system: "adt-tombofannihilation"
  });

});
