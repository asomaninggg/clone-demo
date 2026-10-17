# clone-demo

A live Tavus AI avatar (Kofi) on a fullscreen stage.

1. `npm install`
2. `cp .env.example .env` and fill in `TAVUS_KEY` and `PERSONA_ID`
3. `npm start`, then open http://localhost:3000 and click "Bring out Kofi"

Shortcuts: `F` toggles fullscreen, `E` ends the call, `O` previews the outro, `R` restarts. Calls auto-stop after 4 minutes (`max_call_duration: 240`).

Requires Node 18+.
