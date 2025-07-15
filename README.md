# Patricia Hunziker – CV Website

Dies ist meine persönliche **CV-Website** als Projektarbeit. Sie erfüllt sämtliche definierten Anforderungen gemäss Aufgabenstellung.

👉 **Live-Demo:**  
[https://tizzns.github.io/Patricia-Hunziker/](https://tizzns.github.io/Patricia-Hunziker/)

---

## ✅ Funktionen & Inhalt

- Vollständiges CV:
  - Persönliche Daten & Portrait
  - Berufserfahrung
  - Ausbildung
  - Skills & Tools
- Online erreichbar via GitHub Pages
- Optimiert für moderne Browser (Chrome & Edge)
- Kontaktformular mit:
  - POST-Request an Backend
  - Google reCAPTCHA Schutz
  - Erfolgreicher Mailzustellung

---

## ✅ Optimierungen & Besonderheiten

### 🚀 Performance & Sicherheit
- WebP‑Bilder komprimiert & Hero‑Bild per Preload
- Google Fonts lokal gehostet (Leistung & DSGVO-konform)
- Minifizierte CSS- & JS‑Dateien
- reCAPTCHA lazy‑loaded nur bei Bedarf
- Content-Security-Policy (CSP) angepasst

### 📱 Responsive Design
- Vollständig mobil optimiert
- Media‑Queries für abgestufte Captcha‑Skalierung
- Einheitliches Layout für Inputfelder, Textareas & Captcha

### 🔐 reCAPTCHA‑Handling
- Problem: reCAPTCHA‑iFrame passt sich bei Fehlermeldung in der Höhe an
- Lösung:
  - Flexibler Wrapper mit CSS-Skalierung
  - Dynamische Höhe via JavaScript (ResizeObserver)

### 🛠 Render.com‑Server‑Optimierung
- Kostenloses Render‑Backend schläft nach ~15 Minuten Inaktivität
- Lösung:
  - Ping beim Öffnen des Formulars
  - regelmässiger 10‑Minuten‑“Wake‑Up”‑Ping, um den Server aktiv zu halten  
  (Server‑Config im Repo: [github.com/TizznS/kontaktformular](https://github.com/TizznS/kontaktformular))

### 📈 Lighthouse Performance & Variabilität
- Lighthouse-Scores sind **nicht vollständig reproduzierbar**, da sie je nach Netzwerk, Gerät, CPU-Last und anderen Faktoren schwanken.
- Quelle: [Lighthouse Variability Documentation (GitHub)](https://github.com/GoogleChrome/lighthouse/blob/main/docs/variability.md)
- Mehrere Tests ergaben einen durchschnittlichen Performance-Score von **über 90 %**.

---

## ✅ Technologien

- HTML5, CSS3, Vanilla JavaScript  
- Gehostet auf GitHub Pages  
- Google reCAPTCHA v2  
- Kontaktformular‑Backend auf Render.com  
- Lighthouse & PageSpeed Insights für Performance‑Audits

---

👉 **Source Code:**  
[https://github.com/tizzns/Patricia-Hunziker](https://github.com/tizzns/Patricia-Hunziker)  
👉 **Backend‑Repo:**  
[https://github.com/TizznS/kontaktformular](https://github.com/TizznS/kontaktformular)
