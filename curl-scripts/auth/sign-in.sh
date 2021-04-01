# VARIABLE=VALUE sh curl-scripts/sign-up.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "abc@123.com",
      "password": "123"
    }
  }'

echo
