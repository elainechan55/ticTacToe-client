# VARIABLE=VALUE sh curl-scripts/sign-up.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "abcd@123.com",
      "password": "123",
      "password_confirmation": 123
    }
  }'

echo
