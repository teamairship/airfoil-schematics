# create .env file if not exists
touch .env

# AIRFOIL_BEGIN_ENV_VARS (do not remove or modify this line)
echo "API_BASE_URL=\"${API_BASE_URL}\"" >>.env
# AIRFOIL_END_ENV_VARS (do not remove or modify this line)

echo "Done writing variables. Displaying created .env file ..."

cat .env

echo ".env" >/tmp/envfile
