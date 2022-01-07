web: cd /app/frontend && npm run build && npm run start
server: cd /app/backend && gunicorn backend.config.wsgi --log-file -
release: python manage.py migrate
release: python manage.py collectstatic --noinput
