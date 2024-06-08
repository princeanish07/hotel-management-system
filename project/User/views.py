# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from django.contrib.auth.hashers import check_password
from django.conf import settings

import jwt
import datetime
from django.core.mail import send_mail
from django.contrib.auth.forms import PasswordChangeForm

class SignUpView(APIView):
   
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user=serializer.save()
            self.send_confirmation_email(user)
            return Response({'message': 'Sign Up completed successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def send_confirmation_email(self, user):
        subject = 'Welcome to Hotel Management System'
        message = f'Hi {user.name},\n\nThank you for registering at Our website We are excited to have you on board!'
        from_email = settings.EMAIL_HOST_USER
        recipient_list = [user.email]
        
        send_mail(subject, message, from_email, recipient_list)      

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=email)
            if user.check_password(password):  # Use the check_password method on the user instance
                jwt_object = {
                    'user_id': user.id,
                    'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1)
                }
                token = jwt.encode(jwt_object, settings.SECRET_KEY, algorithm='HS256')
                return Response({'token': token}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid Password'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'error': "User doesn't exist"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class LogoutView(APIView):
    def post(self, request):
        request.session.flush()
        return Response({'message': "Logout Successful"}, status=status.HTTP_200_OK)
