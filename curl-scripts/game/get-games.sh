# VARIABLE=VALUE sh curl-scripts/game/get-games.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games/" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \

echo
