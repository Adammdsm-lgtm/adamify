ADAMIFY — setup, install and updates
====================================

Adamify is a web app. Put it online once (free), then install it on your
phone and PC. It runs like a normal app: its own window, offline, media keys
and lock-screen controls.

QUICKEST ROUTE (once, about 3 minutes)
   Phones can't install an app from a zip file. It needs a web link once:
   a) Go to https://app.netlify.com/drop and drop in this adamify.zip
      (no need to unzip it). You get a link straight away.
   b) Sign up free when it asks, so the link doesn't get deleted.
   c) Open the link on your phone and tap "Install" on the pop-up. Done.
   After that, Adamify opens from your home screen like any other app.

1. PUT IT ONLINE (detailed version)
   - Make a free account at https://app.netlify.com (an account keeps your
     site permanently and lets you upload updates to the same address)
   - Choose "Add new site" > "Deploy manually"
   - Drag this whole "adamify" folder onto the page
   - You get a link like https://something.netlify.app (you can rename it)

2. INSTALL IT
   - PC (Windows/Mac): open the link in Chrome or Edge, then click
     "Install app" on Adamify's home screen (or the install icon at the
     right end of the address bar). It gets its own window and a
     Start menu / Dock icon.
   - Android: open the link in Chrome > tap "Install app"
   - iPhone: open the link in Safari > Share button > "Add to Home Screen"

3. ADD MUSIC
   - Tap "Add songs" (or drag files onto the window on PC)
   - Supported: MP3, AAC/M4A, FLAC, WAV, ALAC, OGG, Opus
     (iPhone: FLAC needs iOS 17 or later)
   - Music added on one device stays on that device. Add it separately on
     your phone and your PC.

4. UPDATING THE APP
   - To release a new version: open your site on Netlify > "Deploys" and
     drag the new "adamify" folder into the upload box. That's the place
     you put in the updated software.
   - Every installed copy (phone and PC) checks for updates when it opens
     and every 30 minutes. When it finds one, a message pops up:
     "A new version of Adamify is ready" > tap "Update now".
   - You can also check any time: Settings (gear) > "Check for updates".
   - Updating never deletes your songs or playlists.
   - For anyone editing the code: change VERSION in sw.js and APP_VERSION
     in index.html each time, or devices won't notice the new version.

IMPORTING A SPOTIFY PLAYLIST
   Adamify saves the playlist's song list (names, artists, album art).
   Spotify doesn't give out the music itself, so each song shows
   "NOT ON DEVICE" until you add your own copy of it. Add your music files
   and Adamify matches them up automatically (or tap a song to pick its file).

   One-time setup (Spotify requires a Premium account for this):
   1. Go to developer.spotify.com/dashboard, log in, "Create app".
   2. Name it Adamify. Under Redirect URIs, add the address Adamify shows
      you in Settings > Spotify connection:
        - Phone/web version: your Netlify link, e.g. https://yourname.netlify.app/
        - Windows app:       http://127.0.0.1:43821/callback
      (Add both if you use both. One Spotify app is enough.)
   3. Tick "Web API", save, and paste the Client ID into Adamify.
   Then: Library > "Import Spotify playlist" > paste the playlist link.

   Spotify only lets apps read playlists YOU made or collaborate on.
   For someone else's playlist: in Spotify choose ... > Add to other
   playlist > New playlist, then import your copy.

   No Premium? Use Library > "Import a song list": paste "Artist - Song"
   lines, or choose a CSV file exported by Exportify or TuneMyMusic.

LYRICS AND CROSSFADE
   - Tap the microphone button while a song plays to see its lyrics. They
     scroll and highlight in time with the music; tap a line to jump there.
     Lyrics come from LRCLIB, a free lyrics database. They're saved after
     the first time, so they work offline too. Not every song has them.
   - Songs blend into each other over 6 seconds. Change it or turn it off
     in Settings (gear) > Crossfade. iPhones and iPads don't let apps fade
     the volume, so there songs play back to back without blending.

YOUR MUSIC FILES - KEEP THEM OFF GITHUB
   - Your songs are in the "Music" folder. Do NOT upload that folder (or
     any music) to GitHub: the site is public, so anyone could download
     them, and publishing music you don't own breaks copyright.
   - To add them to Adamify on your PC: Library > "Add a folder" > pick
     the Music folder. On your phone, copy the songs to the phone (e.g.
     into Files / Downloads) and use "Add songs".
   - Adamify reads the song and artist from file names like
     "Cold Shoulder - Drake.mp3" and works out which way round they are.
     If it guesses wrong: Settings > "How my music files are named".
     To fix one song: tap ... > Edit details.
   - When you upload the app to GitHub, upload only: index.html, sw.js,
     qrcode.js, manifest.webmanifest and the 4 icon .png files.

GET IT ON YOUR PHONE (download link)
   - Once Adamify is online (step 1), your Netlify link IS the download
     link. Open it on any phone and tap Install.
   - On your PC, click the phone icon next to the gear (or Settings >
     "Get Adamify on your phone"). Paste your Netlify link once and Adamify
     shows a QR code: point your phone's camera at it to open the link.

SHUFFLE
   - "Shuffle all songs" on Home, or the shuffle button on any playlist.
   - The order is different every time, never opens on the song you just
     heard, and gets reshuffled each time a repeated playlist starts over.

GOOD TO KNOW
   - No ads, no account, no tracking. Your music is never uploaded anywhere.
   - Songs are stored by the browser on each device. Uninstalling the app or
     clearing Safari/Chrome website data deletes them, so keep your
     original files.
