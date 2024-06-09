# User/urls.py
from django.urls import path,include
from .views import SignUpView, LoginView, LogoutView
from .views import PasswordResetRequestView, PasswordResetConfirmView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('reset-password/', PasswordResetRequestView.as_view(), name='password-reset-request'),
    path('reset-password-confirm/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),

    # urls.py
]


