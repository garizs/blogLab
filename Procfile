web: cd /app/frontend && npm run build && npm run start
server: cd /app/backend && python manage.py runserver 8000
release: python manage.py migrate
release: python manage.py collectstatic --noinput
