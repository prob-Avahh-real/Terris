#!/bin/bash

# Start the HTTP server in background
python3 -m http.server 8000 &
SERVER_PID=$!

echo "Server started with PID: $SERVER_PID"
echo "Waiting for server to be ready..."

sleep 2

# Detect if Chrome is installed
if command -v /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome &> /dev/null; then
    CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
elif command -v google-chrome &> /dev/null; then
    CHROME_PATH="google-chrome"
elif command -v chromium &> /dev/null; then
    CHROME_PATH="chromium"
else
    echo "Chrome not found. Opening in default browser..."
    open http://localhost:8000
    exit 0
fi

# Open Chrome in mobile device mode (iPhone 12 Pro)
"$CHROME_PATH" \
    --user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1" \
    --window-size="390,844" \
    --device-scale-factor=3 \
    --force-device-scale-factor=3 \
    --app="http://localhost:8000" \
    --disable-web-security \
    --disable-features=VizDisplayCompositor &

CHROME_PID=$!

echo "Chrome opened in mobile mode with PID: $CHROME_PID"
echo "Game is running at http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server and close Chrome"

# Wait for user to stop
trap "kill $SERVER_PID $CHROME_PID 2>/dev/null; exit" INT TERM

wait $SERVER_PID
