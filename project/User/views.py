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
# views.py
# User/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User, PasswordResetToken
from .serializers import PasswordResetRequestSerializer, PasswordResetConfirmSerializer
from django.core.mail import send_mail
from django.conf import settings
import uuid

class PasswordResetRequestView(APIView):
    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            try:
                user = User.objects.get(email=email)
                token = uuid.uuid4()
                print(token)
                PasswordResetToken.objects.create(user=user, token=token)
                reset_url = f"{settings.FRONTEND_URL}/reset-password/{token}"
                send_mail(
                    'Password Reset Request',
                    f'Click the link to reset your password: {reset_url}',
                    settings.DEFAULT_FROM_EMAIL,
                    [email],
                    fail_silently=False,
                )
                return Response({'message': 'Password reset link has been sent to your email.'}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'We couldn\'t find an account associated with that email. Please try a different e-mail address.'}, status=status.HTTP_400_BAD_REQUEST)
 
 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from django.utils import timezone
from datetime import timedelta

class PasswordResetConfirmView(APIView):
    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        if serializer.is_valid():
            token = serializer.validated_data['token']
            password = serializer.validated_data['password']
            try:
                reset_token = PasswordResetToken.objects.get(token=token)
                
                # Ensure both datetimes are timezone-aware
                if timezone.is_naive(reset_token.created_at):
                    reset_token.created_at = timezone.make_aware(reset_token.created_at)
                
                expiration_time = reset_token.created_at + timedelta(hours=settings.PASSWORD_RESET_TIMEOUT)
                now = timezone.now()
                
                if now > expiration_time:
                    return Response({'error': 'Token has expired.'}, status=status.HTTP_400_BAD_REQUEST)
                
                user = reset_token.user
                user.set_password(password)
                user.save()
                reset_token.delete()
                return Response({'message': 'Password has been reset.'}, status=status.HTTP_200_OK)
            except PasswordResetToken.DoesNotExist:
                return Response({'error': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
