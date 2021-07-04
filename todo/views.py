from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import TemplateView
from .forms import TodoForm
from .models import TodoDB


class TodoView(TemplateView):
    def __init__(self):
        data = TodoDB.objects.all()
        self.params = {
            "title": "Todoリスト",
            "form": TodoForm(),
            "data": data,
        }

    def get(self, request):
        return render(request, "todo/index.html", self.params)

    def post(self, request):
        self.params["form"] = TodoForm(request.POST)

        if request.POST.get("delate"):
            TodoDB.objects.filter(id=request.POST["delate"]).delete()
            return redirect("todo/index.html")

        if request.POST.get("add"):
            obj = TodoDB()
            todoform = TodoForm(request.POST, instance=obj)
            todoform.save()
            return redirect("todo/index.html")

        return render(request, "todo/index.html", self.params)
