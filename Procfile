release: python manage.py migrate
release: python manage.py collectstatic --noinput
web: cd /app/frontend && npm run start
server: cd /app/backend && python manage.py runserver