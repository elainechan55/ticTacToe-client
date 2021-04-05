# 606a7de39528140017acb6a3 - gameid
# 5ecfd6aacb0bf22167a4d889b6c81bf6 -token

# VARIABLE=VALUE sh curl-scripts/game/get-game-by-id.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \

echo
