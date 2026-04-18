# Adventure Dice Themes

Módulo para **Foundry VTT** que agrega tres temas de dados 3D temáticos para las aventuras de D&D 5e, compatible con **Dice So Nice! 5.x**.

---

## 🎲 Temas incluidos

### 🔵 Waterdeep: Dragon Heist
- **Color base:** Azul marino profundo (`#0D2B6E`)
- **Números:** Dorado brillante (`#FFD700`)
- **Bordes:** Azul medio con contorno dorado oscuro
- **Material:** Vidrio translúcido
- *Evoca las calles adoquinadas y las bóvedas de oro de Waterdeep*

### 🔴 Descent into Avernus
- **Color base:** Negro-rojo carbón infernal (`#2A0000`)
- **Números:** Naranja llameante (`#FF6B00`)
- **Bordes:** Rojo sangre y rojo oscuro
- **Material:** Metal forjado en el Averno
- *Textura de fuego y forja, como hierro candente salido de las fraguas del infierno*

### 🟢 Tomb of Annihilation
- **Color base:** Verde selva oscuro (`#1A3A1A`)
- **Números:** Marfil antiguo (`#F5E6C8`)
- **Bordes:** Marrón hueso y verde medio
- **Material:** Piedra desgastada
- *Piedra cubierta de musgo de la jungla de Chult, con grabados de hueso*

---

## 📦 Instalación

### Método 1 – Manual
1. Descarga o clona este repositorio
2. Copia la carpeta `fvtt-adventure-dice` dentro de `[tu-foundry]/Data/modules/`
3. Renombra la carpeta a `adventure-dice-themes` (debe coincidir con el `"id"` en `module.json`)
4. En Foundry, ve a **Gestionar Módulos** → activa **Adventure Dice Themes**

### Método 2 – Manifest URL
Si publicas el módulo en GitHub/GitLab, en Foundry ve a **Instalar Módulo** y pega la URL raw de tu `module.json`.

---

## 🔧 Dependencias

- **Dice So Nice!** versión 5.x o superior (ID: `dice-so-nice`)

---

## 🎨 Cómo usar los temas

1. Con ambos módulos activos, ve a **Configuración del juego → Módulo Settings → Dice So Nice**
2. En la pestaña **Appearance**, busca el dropdown **Theme**
3. Verás los tres nuevos temas bajo la categoría **"Adventure Dice Themes"** (o "Temas de Dados de Aventura" en español)
4. También puedes seleccionar los sistemas de dados en la pestaña **Dice Presets**

---

## 🛠️ Personalización avanzada

Los colores de cada tema están definidos en `scripts/adventure-dice.js` dentro del hook `diceSoNiceReady`. Puedes cambiar:

| Propiedad     | Descripción                        |
|---------------|------------------------------------|
| `foreground`  | Color de los números/etiquetas     |
| `background`  | Color principal del dado           |
| `outline`     | Contorno de los números            |
| `edge`        | Color de las aristas del dado      |
| `material`    | `metal`, `glass`, `stone`, `wood`  |
| `texture`     | Nombre de textura de DSN           |

---

## 📄 Licencia

MIT License — libre para uso y modificación personal.
Compatible con la [EULA de Foundry VTT para módulos](https://foundryvtt.com/article/license/).
