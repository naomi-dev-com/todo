# from django.urls import path

# from . import views
from django.conf.urls import url
from .views import TodoView

urlpatterns = [
    # pathにindexという名前設定
    # path('', views.index, name='index'),
    # path('', views.form, name='form'),
    url(r"", TodoView.as_view(), name="index")
]
