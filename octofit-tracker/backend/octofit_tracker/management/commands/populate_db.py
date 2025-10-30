from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Limpar dados existentes
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Criar times
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Criar usuários
        users = [
            User.objects.create(email='tony@stark.com', name='Tony Stark', team='Marvel'),
            User.objects.create(email='steve@rogers.com', name='Steve Rogers', team='Marvel'),
            User.objects.create(email='bruce@wayne.com', name='Bruce Wayne', team='DC'),
            User.objects.create(email='clark@kent.com', name='Clark Kent', team='DC'),
        ]

        # Criar atividades
        Activity.objects.create(user='Tony Stark', type='Run', duration=30, date='2025-10-01')
        Activity.objects.create(user='Steve Rogers', type='Swim', duration=45, date='2025-10-02')
        Activity.objects.create(user='Bruce Wayne', type='Bike', duration=60, date='2025-10-03')
        Activity.objects.create(user='Clark Kent', type='Fly', duration=120, date='2025-10-04')

        # Criar leaderboard
        Leaderboard.objects.create(user='Tony Stark', points=100)
        Leaderboard.objects.create(user='Steve Rogers', points=90)
        Leaderboard.objects.create(user='Bruce Wayne', points=110)
        Leaderboard.objects.create(user='Clark Kent', points=120)

        # Criar workouts
        Workout.objects.create(name='Pushups', description='Do 20 pushups')
        Workout.objects.create(name='Situps', description='Do 30 situps')

        # Garantir índice único em email
        client = MongoClient('mongodb://localhost:27017')
        db = client['octofit_db']
        db.users.create_index([('email', 1)], unique=True)
        self.stdout.write(self.style.SUCCESS('Banco populado com sucesso!'))
