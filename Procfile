release: python manage.py migrate
release: python manage.py collectstatic --noinput
web: cd frontend && npm run heroku-prebuild && npm run start
server: cd backend && python manage.py runserver