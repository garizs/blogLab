release: python manage.py migrate
release: python manage.py collectstatic --noinput
web: cd /app/backend && gunicorn backend.config.wsgi --log-file -